/**
 * The enum used for controlling the capitalization of text.
 * Used by changeCapitalization API
 */
export const enum Capitalization {
    /**
     * Transforms the first character of each word to uppercase
     */
    CapitalizeEachWord = 'capitalize',

    /**
     * Transforms all characters to uppercase
     */
    Uppercase = 'uppercase',

    /**
     * Transforms all characters to lowercase
     */
    Lowercase = 'lowercase',
}