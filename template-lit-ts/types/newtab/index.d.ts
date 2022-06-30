import { LitElement } from 'lit';
/**
 * newtab
 */
export declare class Newtab extends LitElement {
    crx: string;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        newtab: Newtab;
    }
}
