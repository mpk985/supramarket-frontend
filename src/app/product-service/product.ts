export interface RootProduct {
    product: Product[];
}



export interface Product {
    id: number;
    title: string;
    bodyHtml?: string;
    productType: string;
    createdAt: Date;
    updatedAt?: Date;
    publishedAt: Date;
    status: string;
    productVariantList?: Array<ProductVariantList>;
    productOptionList?: Array<ProductOptionList>;
    productImageList?: Array<ProductImageList>;
}

export interface ProductVariantList{
    id: number;
    productId: number;
    title: string;
    price: number;
    sku: string;
    position: number;
    option1?: string;
    option2?: string;
    option3?: string;
    createdAt: Date;
    updatedAt: Date;
    taxable?: boolean;
    imageId?: number;
    inventoryItemId: number | string;
    inventoryQuantity: number | string; 
}

export interface ProductOptionList{
    id: number;
    productId: number;
    name: string;
    position: number;
    valuesList?: Array<string>;
}

export interface ProductImageList{
    id: number;
    productId: number;
    createdAt: Date;
    updatedAt?: Date;
    alt?: string;
    width: number;
    height: number;
    imageUrl: string;
    variantIdList: Array<number>;
}
