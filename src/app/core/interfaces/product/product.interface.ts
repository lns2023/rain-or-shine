import { ProductOptionsModel } from './product-options.interface';
import { ProductColor } from './product-color.interface';
import { ProductContentModel } from './product-content.interface';

export interface ProductModel {
    title: string;
    subtitle ?: string;
    type ?: string;
    type2 ?: string;
    image: string;
    content ?: ProductContentModel [];
    color ?: ProductColor [];
    hasPaintCalculator ?: boolean;
    min ?: number;
    max ?: number;
    perLiter?: number;
    suggestion?: any [];
    active ?: boolean;
    moreThanOneOption ?: boolean;
    parentOption ?: ProductOptionsModel[];
    keywords: string;
}
