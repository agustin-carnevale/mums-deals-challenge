export interface Product {
  id:                          number;
  title:                       string;
  body_html:                   string;
  vendor:                      string;
  product_type:                string;
  created_at:                  Date;
  handle:                      string;
  updated_at:                  Date;
  published_at:                Date;
  template_suffix:             string;
  status:                      string;
  published_scope:             string;
  tags:                        string;
  admin_graphql_api_id:        string;
  variants:                    Variant[];
  options:                     Option[];
  images:                      Image[];
  image:                       Image;
  collections:                 Collection[];
  quantitySold:                number;
  optionsOfProductsInStock:    Option[];
  presentationsBySize?:        PresentationsBySize;
  presentationsBySizeInStock?: PresentationsBySize;
}

export interface Collection {
  node: Node;
}

export interface Node {
  handle: string;
}

export interface Image {
  id:                   number;
  product_id:           number;
  position:             number;
  created_at:           Date;
  updated_at:           Date;
  alt:                  null;
  width:                number;
  height:               number;
  src:                  string;
  variant_ids:          number[];
  admin_graphql_api_id: string;
}

export interface Option {
  id:         number;
  product_id: number;
  name:       Name;
  position:   number;
  values:     string[];
}

export enum Name {
  Quantity = "Quantity",
  Size = "Size",
  Unit = "Unit",
  Weight = "Weight",
}

export interface PresentationsBySize {
  "2": The2[];
  "3": The2[];
  "4": The2[];
  "5": The2[];
  NB:  The2[];
}

export interface The2 {
  quantity: string;
  weight:   Weight;
}

export enum Weight {
  The045Kg = "0-4.5kg",
  The1118Kg = "11-18kg",
  The36Kg = "3-6kg",
  The558Kg = "5.5-8kg",
  The712Kg = "7-12kg",
}

export interface Variant {
  id:                     number;
  product_id:             number;
  title:                  string;
  price:                  string;
  sku:                    string;
  position:               number;
  inventory_policy:       InventoryPolicy;
  compare_at_price:       null | string;
  fulfillment_service:    FulfillmentService;
  inventory_management:   InventoryManagement;
  option1:                string;
  option2:                string;
  option3:                Weight | null;
  created_at:             Date;
  updated_at:             Date;
  taxable:                boolean;
  barcode:                null | string;
  grams:                  number;
  image_id:               number;
  weight:                 number;
  weight_unit:            WeightUnit;
  inventory_item_id:      number;
  inventory_quantity:     number;
  old_inventory_quantity: number;
  requires_shipping:      boolean;
  admin_graphql_api_id:   string;
  appliedDiscount:        number | string;
}

export enum FulfillmentService {
  Manual = "manual",
}

export enum InventoryManagement {
  Shopify = "shopify",
}

export enum InventoryPolicy {
  Deny = "deny",
}

export enum WeightUnit {
  Kg = "kg",
}
