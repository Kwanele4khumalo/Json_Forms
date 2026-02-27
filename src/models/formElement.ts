import { FormOption } from "./formOption";

export class FormElement {
    type!: string;
    label!: string;
    field!: string;
    value!: string;
    options!: FormOption[];
    action!: string;
}