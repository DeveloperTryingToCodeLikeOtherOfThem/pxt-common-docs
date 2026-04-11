<img width="907" height="68" alt="image" src="https://github.com/user-attachments/assets/65d9a9ac-067c-48df-adf9-ecfa8551205a" />

``` html
    <link crossorigin="" href="https://cdnjs.cloudflare.com" rel="preconnect" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
    <meta name="google-adsense-platform-account" content="ca-host-pub-1556223355139109" />
    <meta name="google-adsense-platform-domain" content="blogspot.com" />
    <script type="text/javascript" language="javascript">
      // Supply ads personalization default for EEA readers
  // See https://www.blogger.com/go/adspersonalization
  adsbygoogle = window.adsbygoogle || [];
  if (typeof adsbygoogle.requestNonPersonalizedAds === &#39;undefined&#39;) {
    adsbygoogle.requestNonPersonalizedAds = 1;
  }
    </script>
```

``` html
    // templateQuestAnswer
    let templateQuestAnswer = `<header class="main-header">
        <nav class="navbar">
            <div class="container">
                <a href="/" class="brand">{{title-headers}}</a>
                <div class="nav-right">
                    <div class="search-container">
                        <form class="search-form">
                            <input type="text" class="search-input" placeholder="{{Cari artikel}}...">
                            <button type="submit" class="search-btn" aria-label="{{Submit pencarian}}">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                        <button class="search-toggle" aria-label="{{Toggle pencarian}}">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <button class="sidebar-toggle" aria-label="{{Toggle menu sidebar}}">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
    </header>
```

``` js
 document.addEventListener(&#39;DOMContentLoaded&#39;, function(event) {
      window.cookieChoices &amp;&amp; cookieChoices.showCookieConsentBar &amp;&amp; cookieChoices.showCookieConsentBar(
          (window.cookieOptions &amp;&amp; cookieOptions.msg) || &#39;Ce site utilise des cookies provenant de Google pour fournir ses services et analyser le trafic. Votre adresse\xa0IP et votre user-agent, ainsi que des statistiques relatives aux performances et \xe0 la s\xe9curit\xe9, sont transmis \xe0 Google afin d\x27assurer un service de qualit\xe9, de g\xe9n\xe9rer des statistiques d\x27utilisation, et de d\xe9tecter et de r\xe9soudre les probl\xe8mes d\x27abus.&#39;,
          (window.cookieOptions &amp;&amp; cookieOptions.close) || &#39;OK\xa0!&#39;,
          (window.cookieOptions &amp;&amp; cookieOptions.learn) || &#39;En savoir plus&#39;,
          (window.cookieOptions &amp;&amp; cookieOptions.link) || &#39;https://www.blogger.com/go/blogspot-cookies&#39;);
    });
```

``` js

        // ganti translet
        for (let obj of Object.entries(data?.translet || {})) {
            let key = obj[0];
            let value = obj[1];
            if (key && value) {
                templateQuestAnswer = templateQuestAnswer.replaceAll(key, value);
            };
        };

```

``` js
 scriptJob.text = JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": job?.title,
            "description": plainDescription,
            "datePosted": job?.date_posted,
            "validThrough": job?.valid_through,
            "employmentType": job?.employment_type,
            "hiringOrganization": {
                "@type": "Organization",
                "name": job?.hiring_organization?.name,
                "sameAs": job?.hiring_organization?.same_as,
                "logo": job?.hiring_organization?.logo
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": job?.job_location?.address?.street_address,
                    "addressLocality": job?.job_location?.address?.address_locality,
                    "addressRegion": job?.job_location?.address?.address_region,
                    "postalCode": job?.job_location?.address?.postal_code,
                    "addressCountry": job?.job_location?.address?.address_country
                }
            },
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": job?.base_salary?.currency,
                "value": {
                    "@type": "QuantitativeValue",
                    "minValue": job?.base_salary?.value?.min_value,
                    "maxValue": job?.base_salary?.value?.max_value,
                    "unitText": job?.base_salary?.value?.unit_text
                }
            }
        });
        document.head.appendChild(scriptJob);
```

``` html
        let dom_answer_card = "";
        let isFirst = true;
        for (let answer of (data?.data_content?.data?.answers?.nodes || [])) {
            // console.log(answer);
            let time_format_answer = new Date(answer?.created || new Date()).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            let name_author_answer = answer?.author?.nick || "Anonyme";
            let total_like = answer?.author?.nick?.length || "Anonyme".length;
            dom_answer_card += `
        <div id="answer-${answer?.id || name_author_answer.toUpperCase()}" class="answer-card ${isFirst ? "best-answer" : ""} " itemprop="${isFirst ? "acceptedAnswer" : "suggestedAnswer"}" itemscope="" itemtype="https://schema.org/Answer">
          <meta itemprop="url" content="${window.location.href}#answer-${answer?.id || name_author_answer.toUpperCase()}">
          <div class="answer-header">
            <div class="answerer-info">
              <span class="answerer-avatar">
              <i class="fas fa-user-tie"></i>
              </span>
              <div class="answerer-details">
                <span class="answerer-name" itemprop="author" itemscope="" itemtype="https://schema.org/Person">
                  <span itemprop="name"><a itemprop="url" href="#${answer?.id || name_author_answer.toUpperCase()}">${name_author_answer.toUpperCase()}</a></span>
                  <meta itemprop="jobTitle" content="Web Performance Expert">
                </span>
              </div>
            </div>
            <div class="answer-rating">
              ${isFirst ? `<span class="best-answer-badge"><i class="fas fa-check-circle"></i> {{Jawaban Terbaik}}</span>` : ""}
              <div class="rating-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                <span class="rating-count">(<span itemprop="upvoteCount">${answer?.content?.length || 0}</span>)</span>
              </div>
            </div>
          </div>
          <div class="answer-content" itemprop="text">
            ${answer?.content || ""}
```

``` html
     <div class="answer-rating">
              ${isFirst ? `<span class="best-answer-badge"><i class="fas fa-check-circle"></i> {{Jawaban Terbaik}}</span>` : ""}
              <div class="rating-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                <span class="rating-count">(<span itemprop="upvoteCount">${answer?.content?.length || 0}</span>)</span>
              </div>
            </div>
          </div>
          <div class="answer-content" itemprop="text">
            ${answer?.content || ""}
```

``` html
 async function load_content_qa(data) {
        const time_format_publish = new Date(data?.data_content?.e || data?.data_content?.c || new Date()).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const title_content = data?.data_content?.t || "";
        const description_content = data?.data_content?.d || title_content;
        const author_name = data?.data_content?.data?.author?.nick || "Anonyme";
        const total_views = data?.data_content?.data?.content?.length || 0;
        const total_comment = data?.data_content?.t?.length || data?.data_content?.d || 0;
        const total_shares = data?.data_content?.data?.subject?.name?.length || 0;
        const data_question = data?.data_content?.data?.content || "";

        // ganti title-headers
        templateQuestAnswer = templateQuestAnswer.replaceAll("{{title-headers}}", window.location.hostname);

        templateQuestAnswer = templateQuestAnswer.replaceAll("{{main-content}}", `
      <article class="blog-post-content">
          <div class="post-content-wrapper">
            <div class="post-text" itemscope="" itemtype="https://schema.org/QAPage">
              <div class="question-section" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">


                <div class="question-header">
                    <h2>{{Pertanyaan}}</h2>
                    <div class="question-meta">
                      <span class="difficulty"><i class="fas fa-signal"></i> {{Grade}}: ${data?.data_content?.data?.grade?.name || "Other"}</span>
                      <span class="subject"><i class="fas fa-book"></i> {{Subject}}: ${data?.data_content?.data?.subject?.name || "Other"}</span>
                    </div>
                </div>
                <div class="question-content">
                    <div itemprop="text name">${data_question}</div>
                    <div class="question-details">
                      <div class="asker-info">
                          <span class="asker-avatar">
                          <i class="fas fa-user-circle"></i>
                          </span>
                          <span class="asker-name">{{Ditanyakan oleh}}: <span itemprop="author" itemscope="" itemtype="https://schema.org/Person"><span itemprop="name"><a itemprop="url" href="#${data?.data_content?.data?.id || author_name.toUpperCase()}">${author_name.toUpperCase()}</a></span></span></span>
                      </div>
                      <div class="question-stats">
                          <span class="views"><i class="fas fa-eye"></i> <span itemprop="upvoteCount">${total_views}</span> {{dilihat}}</span>
                          <span class="answers"><i class="fas fa-comment-dots"></i> <span itemprop="answerCount">${total_comment}</span> {{jawaban}}</span>
                      </div>
                      <meta itemprop="dateCreated" content="${data?.data_content?.c || data?.data_content?.data?.created || new Date().toISOString()}">
                    </div>
                </div>

                <div class="responsive-ad ad-after-question">
                  <div class="ad-placeholder"><span>Responsive Ad After Question</span></div>
                </div>

                <div class="answers-section">
                  <h3>{{Jawaban}} (${total_comment})</h3>
                  {{answer-card}}
                </div>


              </div>
            </div>
            <div class="load-more-answers">
              <button class="load-more-btn">
                <span class="btn-text">{{Lihat jawaban lainnya}} (${total_comment})</span>
                <span class="btn-icon"><i class="fas fa-chevron-down"></i></span>
                <span class="loading-spinner"><i class="fas fa-circle-notch"></i></span>
              </button>
            </div>

            <div class="related-posts list-style" itemscope itemtype="https://schema.org/ItemList">
              <h3 itemprop="name">{{Artikel Terkait}}</h3>
              <div class="related-posts-list">
                {{related-posts}}
              </div>
            </div>

            <div class="related-posts list-style" itemscope itemtype="https://schema.org/ItemList">
              <h3 itemprop="name">Recommended Articles</h3>
              <div class="related-posts-list">
                {{bl-related-posts}}
              </div>
            </div>

          </div>
      </article>
    `);

        // ganti intro content
        templateQuestAnswer = templateQuestAnswer.replaceAll("{{intro-content}}", `
      <div class="intro-content">
        <h1>${title_content}</h1>
          <div class="post-meta-header">
              <div class="author-info">
                  <span class="author-avatar">
                      <i class="fas fa-user-circle"></i>
                  </span>
                  <span class="author-name">{{Oleh}}: ${author_name.toUpperCase()}</span>
              </div>
              <div class="post-details">
                  <span class="post-date"><i class="fas fa-calendar"></i> ${time_format_publish}</span>
                  <span class="post-category"><i class="fas fa-folder"></i> ${data?.data_content?.data?.subject?.name || "Other"}</span>
                  <span class="read-time"><i class="fas fa-clock"></i> 5 {{menit baca}}</span>
              </div>
              <div class="post-stats-header">
                  <div class="rating">
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                      <span>4.5</span>
                  </div>
                  <div class="post-info">
                      <span class="views"><i class="fas fa-eye"></i> ${total_views} {{views}}</span>
                      <span class="comments"><i class="fas fa-comment"></i> ${total_comment} {{komentar}}</span>
                      <span class="shares"><i class="fas fa-share-alt"></i> ${total_shares} {{shares}}</span>
                  </div>
              </div>
          </div>
      </div>
    `);`
```
**If you ever encountered any website have this structure, exit out immediately. As mentioned previously do NOT click it.**
