#!/usr/bin/env bash
set -e

echo "Building move map from git history..."

# Format: old_path<TAB>new_path
git log --name-status --diff-filter=R --pretty=format: -- docs | \
  awk 'NF==3 && $1 ~ /^R/ {print $2 "\t" $3}' | sort -u > /tmp/moves.txt || true

echo "Move map:"
cat /tmp/moves.txt || true

# Load move map into an associative array: old -> new
declare -A MOVES
if [ -f /tmp/moves.txt ]; then
  while IFS=$'\t' read -r old new; do
    [ -z "$old" ] && continue
    MOVES["$old"]="$new"
  done < /tmp/moves.txt
fi

echo "Loaded ${#MOVES[@]} moved paths"

# If no moves, nothing to do
if [ ${#MOVES[@]} -eq 0 ]; then
  echo "No moved docs detected. Exiting."
  exit 0
fi

# Find all markdown files
mapfile -t ALL_MD < <(find . -type f -name "*.md")

for md in "${ALL_MD[@]}"; do
  echo "Processing $md"

  # Extract links like [text](../docs/...)
  matches=$(grep -oP '

\[[^\]

]+\]

\(\.\./docs/[^\)]+\)' "$md" || true)
  [ -z "$matches" ] && continue

  while IFS= read -r link; do
    [ -z "$link" ] && continue

    # Extract the path part after ../docs/
    target_rel=$(echo "$link" | sed -E 's/.*\(\.\.\/docs\/([^)]*)\).*/\1/')

    # Build the old full path (what the link currently points to)
    old_path="docs/${target_rel}"
    case "$old_path" in
      *.md) ;;
      *) old_path="${old_path}.md" ;;
    esac

    # If this old_path is not in the move map, skip
    new_path="${MOVES[$old_path]}"
    if [ -z "$new_path" ]; then
      continue
    fi

    # Only act if the old path no longer exists AND the new one does
    if [ -e "$old_path" ]; then
      continue
    fi

    if [ ! -e "$new_path" ]; then
      continue
    fi

    # Compute new relative docs path without extension for the link
    clean="${new_path#docs/}"
    clean="${clean%.md}"

    # Preserve original link text, only change the target
    link_text=$(echo "$link" | sed -E 's/^

\[([^]]+)\]

\(.*$/\1/')
    new_link="[$link_text](../docs/${clean})"

    echo "Updating link in $md:"
    echo "  old: $link"
    echo "  new: $new_link"

    # Replace in file
    sed -i "s|$link|$new_link|g" "$md"

  done <<< "$matches"
done
