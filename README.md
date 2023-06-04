d# JavaScript Challenge: Password Generator

## ScreenShot

[Password Generator.webm](https://github.com/SirModV/modVision-uofm-mod3/assets/103627016/386c1bf5-3129-470b-a101-b2675605c8c0)

This is a simple password generator application built with JavaScript. It allows an employee to generate a random password that meets certain criteria, providing greater security for sensitive data.

The application runs in the browser and features a clean and polished user interface that adapts to multiple screen sizes.

## User Story

As an employee with access to sensitive data, I want to randomly generate a password that meets certain criteria so that I can create a strong password that provides greater security.

## Acceptance Criteria

- When I click the button to generate a password, I am presented with a series of prompts for password criteria.
- When prompted for password criteria, I can select which criteria to include in the password.
- When prompted for the length of the password, I can choose a length of at least 8 characters and no more than 128 characters.
- When asked for character types to include in the password, I can confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
- When I answer each prompt, my input is validated and at least one character type should be selected.
- When all prompts are answered, a password is generated that matches the selected criteria.
- When the password is generated, it is either displayed in an alert or written to the page.

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "Generate Password" button.
3. Follow the prompts to select the desired criteria for your password.
4. After answering all the prompts, the generated password will be displayed on the page.

## Customization

If you want to customize the character sets used for generating passwords, you can modify the following variables in the `script.js` file:

- `lowercaseChars`: The set of lowercase characters to include in the password.
- `uppercaseChars`: The set of uppercase characters to include in the password.
- `numericChars`: The set of numeric characters to include in the password.
- `specialChars`: The set of special characters to include in the password.

Please note that modifying the character sets may impact the strength and randomness of the generated passwords.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it according to your needs.
