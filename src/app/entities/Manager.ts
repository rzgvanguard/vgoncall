import { BaseCrew } from './BaseCrew';
import { ProductData } from './ProductData';

export class Manager implements BaseCrew {
    ProductList: Array<ProductData>;
    CrewId: String;
    CrewEmail: String;
    CrewPhoneNumber: String;
    CrewExtension: String;
    FirstName: String;
    LastName: String;
    OnCallDays: Array<Number>;
}
