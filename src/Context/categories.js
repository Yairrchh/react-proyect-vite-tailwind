// Maps our nav categories to DummyJSON's real product category slugs
// https://dummyjson.com/products/categories
export const CATEGORY_GROUPS = {
    clothes: ['mens-shirts', 'mens-shoes', 'tops', 'womens-dresses', 'womens-shoes'],
    electronics: ['smartphones', 'laptops', 'tablets', 'mobile-accessories'],
    fornitures: ['furniture', 'home-decoration', 'kitchen-accessories'],
    beauty: ['beauty', 'fragrances', 'skin-care'],
    others: ['groceries', 'motorcycle', 'sports-accessories', 'sunglasses', 'vehicle', 'womens-bags', 'womens-jewellery', 'mens-watches', 'womens-watches'],
}

export const formatCategory = (slug) => {
    if (!slug) return ''
    return slug.replace(/-/g, ' ')
}
