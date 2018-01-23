# Text Target Length for SilverStripe CMS

![Character limits in action](screenshots/character-count.gif)

If you see a field marked 'Description' you know roughly what type of content to put in there. But how do you know how much of it to write? A single sentence might do, but maybe a paragraph or more is required? A great content plan should recommend an ideal length for every type of content, so content authors and designers alike can make informed decisions.

This module extends the `TextField`, `TextareaField` and `HTMLEditorField` classes in SilverStripe to allow you to set a recommended content length, and set soft upper and lower limits on character count.

## Requirements

SilverStripe 4.0+

## Installation

### Composer (best practice)

[Packagist listing](https://packagist.org/packages/jonom/silverstripe-text-target-length) and [installation instructions](http://doc.silverstripe.org/framework/en/trunk/installation/composer#adding-modules-to-your-project)

## How to use

With the module installed you can call call `setTargetLength()` on `TextField`, `TextareaField` and `HTMLEditorField` form fields.

```php
// Ideal length: 100 characters
// Minimum: 75 (automatically set at 75% of ideal)
// Maximum: 125 (automatically set at 125% of ideal)
$field->setTargetLength(100);

// Ideal length: 100 characters
// Minimum: 25
// Maximum: 150
$field->setTargetLength(100, 25, 150);

// Prefer to think in word count?
// 6 characters per word works okay for English
$field->setTargetLength(50*6);
```

### Customise hint text

This module supports translation through yml, so if you want to change the hint text that is displayed when users are typing, just create your own language file to override the one included in the module.

## Want to see more like this?

I donate a lot of my time to open-source projects, so if you use this module in a commercial project a small donation to keep me motivated would be much appreciated. If you'd like to sponsor additional development on this module I'd love to hear from you.

[<img src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif" alt="Donate">](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z5HEZREZSKA6A)

## To Do

 - [ ] Translation
 - [ ] Customise hint text through config

## Maintainer contact

[jonathonmenz.com](http://jonathonmenz.com)
