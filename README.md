# SimpleBlock

Simple ad blocking extension for Safari on iOS and macOS, using `declarativeNetRequest`.

---



## Content Blocking

Safari has supported multiple types of content blocker in the past decade.  The current iteration is described in the following WWDC talks:
- [Explore Safari Web Extension improvements - WWDC21](https://developer.apple.com/videos/play/wwdc2021/10027/) - initial introduction
- [Adopting Declarative Content Blocking in Safari Web Extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/adopting_declarative_content_blocking_in_safari_web_extensions) - demo code from WWDC21 presentation
- [Blocking content with your Safari web extension](https://developer.apple.com/documentation/safariservices/safari_web_extensions/blocking_content_with_your_safari_web_extension)
- [What’s new in Safari extensions - WWDC23](https://developer.apple.com/videos/play/wwdc2023/10119/) - updates to `declarativeNetRequest`

NOTE: This is ***NOT*** what is described in the [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker) article.  This was introduced at WWDC15, and does still apply to making content blocking rules inside of `WKWebView` with `WKContentRuleList` but NOT to Safari extensions.

### Rules

Multiple rule sets can be listed in the `manifest.json`:
```
    "declarative_net_request" : {
        "rule_resources" : [
            {
                "id":       "rules one",
                "enabled":  true,
                "path":     "rules1.json"
            },
            {
                "id":       "rules two",
                "enabled":  true,
                "path":     "rules2.json"
            }
        ]
    },
```

Currently, the `rules.json` file contains all the rules.  Rules are in the format:
```
{
    "id": 1,
    "priority": 1,
    "action": { "type": "block" },
    "condition": {
        "regexFilter": ".*",
        "resourceTypes": [ "script" ]
    }
}
```

Allowed resourceTypes are `main_frame`, `sub_frame`, `stylesheet`, `script`, `image`, `font`, `xmlhttprequest`, `ping`, `media`, `websocket`, and `other`.

Safari team seems to support much of [Mozilla's `declarativeNetRequest` docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest).
