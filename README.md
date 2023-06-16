# Text Target Length for SilverStripe CMS

![Character limits in action](screenshots/character-count.gif)

If you see a field marked 'Description' you know roughly what type of content to put in there. But how do you know how much of it to write? A single sentence might do, but maybe a paragraph or more is required? A great content plan should recommend an ideal length for every type of content, so content authors and designers alike can make informed decisions.

This module extends the `TextField`, `TextareaField` and ~~`HTMLEditorField`~~ ([#3](https://github.com/jonom/silverstripe-text-target-length/issues/3)) classes in SilverStripe to allow you to set a recommended content length, and set soft upper and lower limits on character count.

## Requirements

SilverStripe 4|5 (3.1+ in previous releases)

## Installation

```composer require jonom/silverstripe-text-target-length```

[Packagist listing](https://packagist.org/packages/jonom/silverstripe-text-target-length)

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

### Front-end use

If you want to use this module outside of the CMS, you will need to load a copy of jQuery and jQuery Entwine in to the page. Example:

```php
Requirements::javascript('silverstripe/admin:thirdparty/jquery/jquery.js');
Requirements::javascript('silverstripe/admin:thirdparty/jquery-entwine/dist/jquery.entwine-dist.js');
```

## Maintainer contact

[Jono Menz](https://jonomenz.com)

## Sponsorship

If you want to boost morale of the maintainer you're welcome to make a small monthly donation through [**GitHub**](https://github.com/sponsors/jonom), or a one time donation through [**PayPal**](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z5HEZREZSKA6A). ❤️ Thank you!

Please also feel free to [get in touch](https://jonomenz.com) if you want to hire the maintainer to develop a new feature, or discuss another opportunity.
