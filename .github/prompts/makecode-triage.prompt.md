# PXT Issue Triage

Perform comprehensive triage for issue #${{ github.event.issue.number }} in the **DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs** repository using the imported generic triage agent.

## MakeCode Context

You are triaging issues for **Microsoft MakeCode**, a multi-repository development workspace consisting of:
- **pxt-arcade**: Arcade-specific target configuration, extensions, and documentation
- **pxt** (pxt-core): Core MakeCode framework (editor, build system, compiler)
- **pxt-common-packages**: Cross-target game engine APIs (sprites, physics, controller)
- **pxt-arcade-sim** - Arcade's simulator implementation
- **pxt-microbit** - Microbit-specific target configuration, extensions, and documentation
- **pxt-microbit-sim** - Microbit's simulator implementation
- **pxt-hardware-programming-docs** A specific repository meant for explaining much more functions and properites that are exported in the other 4 repositories above support

### Repository Routing Rules

**IN-SCOPE FOR THIS TRIAGE (ALWAYS OK TO FILE IN microsoft/pxt-arcade):**
- microsoft/pxt-arcade - Arcade-specific features, target config, arcade blocks/APIs, arcade hardware, arcade documentation
- **microsoft/pxt** (pxt-core) - Core editor functionality, build system, Monaco/block editor, package management, language services, compilation pipeline, web app infrastructure
- **microsoft/pxt-common-packages** - Cross-target game engine (sprites, physics, controller), hardware abstraction, shared simulator functionality
- **microsoft/pxt-arcade-sim** - Simulator implementation for Arcade
- **microsoft/pxt-microbit** - Microbit-specific features, target config, microbit blocks/APIs, microbit hardware, microbit documentation.
- **DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs** For more documentation about low level functions and properties related to all PXT targets
- Any issue affecting all the pxt target implementation or development environment

⚠️ **HARD RULE (DO NOT VIOLATE)**: If an issue appears to belong to **microsoft/pxt**, **microsoft/pxt-common-packages**, **microsoft/pxt-arcade-sim**, **microsoft/pxt-microbit**, or **DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs**, it is STILL **IN-SCOPE HERE**. Do **NOT** recommend “wrong repo”, do **NOT** ask the reporter to re-file elsewhere, and do **NOT** close/deflect for repo-choice reasons. Instead, triage it here and clearly state **Likely fix location: <repo/path>**.

**REDIRECT OUT OF THIS WORKSPACE (ONLY these cases):**
- **microsoft/pxt-minecraft** - Issues specific to MakeCode for Minecraft blocks, Minecraft gameplay, Minecraft-specific features
- Third-party extensions not maintained in the pxt-hardware-programming-docs workspace

**When you suspect a different repo:**
- If it’s one of the IN-SCOPE workspace repos above: keep triage in this repo and add “Likely fix location: …”.
- If it’s one of the REDIRECT OUT OF THIS WORKSPACE repos above: recommend redirecting.

### Component Taxonomy

When classifying issues, use these component labels:

**Core Components:**
- `blocks` - Block editor, blockly integration, block definitions
- `toolbox` - Block toolbox, category organization, search
- `simulator` - Game simulator, rendering, display
- `assets` - Asset editor, sprites, images, tiles
- `monaco` - Text/TypeScript editor, IntelliSense

**Features:**
- `tutorial` - In-editor tutorials, tutorial engine
- `extension` - Extensions, package management
- `multiplayer` - Multiplayer features, networking
- `hardware` - Hardware devices, arcade cabinets
- `github-integration` - GitHub import/export, sharing

**UI/UX:**
- `homescreen` - Home screen, project gallery
- `sidedocs` - Documentation panel, help
- `Theme` - Visual themes, styling
- `high contrast` - High contrast mode
- `accessibility` - Accessibility features, screen readers
- `keyboardnav` - Keyboard navigation
- `editor` - Editor UI, layout, controls

**Quality:**
- `reliability` - Crashes, stability issues
- `browser compat` - Browser-specific issues
- `performance` - Performance, speed, memory

**Content:**
- `documentation` - Docs in docs/ folder
- `HoAI` - Hour of Code content

### MakeCode-Specific Code Search Hints

When searching for code, consider these common file patterns:

# MakeCode Arcade
**Arcade-specific files (pxt-arcade repo):**
- `pxtarget.json` - Target configuration (released version)
- `targetconfig.json` - Live configuration (served between releases)
- `libs/*/` - Arcade-specific library extensions
- `docs/` - Arcade documentation
- `editor/` - Editor customizations
- `theme/` - Arcade themes

**Core framework files (pxt repo):**
- `webapp/`, `pxteditor/` - Web app and editor
- `pxtcompiler/` - Language services, compiler
- `libs/base/`, `libs/core/` - Core TypeScript APIs
- `gulpfile.js`, `Makefile` - Build system

**Game engine files (pxt-common-packages repo):**
- `libs/game/` - Game engine (sprites, physics)
- `libs/controller/` - Input handling
- `libs/screen/` - Display APIs
- `sim/` - Shared simulator

  # MakeCode Microbit

  **Microbit-specific files (pxt-microbit repo):**
  - `pxtarget.json` - Target configuration (released version)
  - `targetconfig.json` Live configuration (served between releases)
  - `libs/*/` - Microbit-specific library extensions
  - `docs/` - Microbit documentation
  - `editor/` - Editor customization
  - `theme/` - Microbit themes

  **Core framwork files (pxt repo):**
  - `webapp/`, `pxteditor/` - Web app and editor
  -  `pxtcompiler/` - Language services, compiler
  - `libs/core/` - Core TypeScript APIs
  - `gulpfile.js`, `Makefile` - Build system


  # MakeCode Programming Docs
  **pxt-hardware-programming-docs-specific files (pxt-hardware-programming-docs repo):**
  - `pxtarget.json` - Target configuration (released version)
  - `targetconfig.json` Live configuration (served between releases)
  - `docs/` - Explains more Arcade, Microbit, Arcade-sim, and PXT related documentations. 
  

### MakeCode-Specific Considerations

**Block Annotations:**
- Prefer `$variable` format over deprecated `%variable` format in block annotations
- Shadow values should be configured separately for better localization

**Multi-Repository Workspace:**
- Changes may require coordination across repositories
- File paths should specify which repository they're in
