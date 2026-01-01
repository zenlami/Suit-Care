
import { Product, Feature } from './types';

export const FEATURES: Feature[] = [
  { id: 1, icon: 'verified_user', title: 'Bảo hành 2 năm', subtitle: 'Cam kết chất lượng' },
  { id: 2, icon: 'water_drop', title: 'Chống thấm nước', subtitle: 'Vải Oxford cao cấp' },
  { id: 3, icon: 'flight_takeoff', title: 'Chuẩn hành lý', subtitle: 'Phù hợp xách tay máy bay' },
  { id: 4, icon: 'local_shipping', title: 'Miễn phí vận chuyển', subtitle: 'Đơn hàng từ 1 triệu' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Executive Traveler Pro',
    description: 'Da thật Italia, Chống nhăn',
    price: 3500000,
    oldPrice: 4200000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9oyYkB8mmfEOo6CZ7TzAK6N7Xr8iaNQtcElREf8UOU2Y9xVXzJ8JMi597ORITY-PNGY4H-EJYHNaVr6O6Tks9m6KzhnZJNDVIl9GFCzBQBLSlwoA5UKVIOwlyN-MSO1o0_wCOtnCK7ZWxFWD9w6WMVeATLBLc_cAex1zS4nEXpTTCeegF-kx65Si1fGGR6Rl4aEuBy_90hU-9vmla272zWG2w-gSmOmGZDBb63ZWCXxzfIsYlbeSDqhbnFv1jowWY5gVBJBprDC3T',
    isHot: true
  },
  {
    id: 'p2',
    name: 'Classic Garment Bag',
    description: 'Vải dù cao cấp, siêu nhẹ',
    price: 1250000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXP2F7tAOP0pHn2hoNBdexUkCoJ5sAAXNb8p8T4Jl4oiY0us5Jp8LG01jqdEMQu5Jbl6fHnQyliK2fovuxL5myLIJx5_piosMNXH0mzdELjmcN8VJF-QlE0F-AAW4XHF1-K3_qs1mOCB98q2IbpZnUrIFJxNnMFrHezsFVF-tUPjnAV1phDfKdxMQR3RZPgl4Vj9O7aNZKcGr8JgBrmx6IH8tQcCBBrh28mp0ClPJnwtmcjA_NE_HpL1vJYP-tOKHr5XlXrnsvW9yw'
  },
  {
    id: 'p3',
    name: 'Weekend Suit Carrier',
    description: 'Dung tích lớn, nhiều ngăn',
    price: 2100000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgifDAtCVCXdlDypApQm_0LkUdJ9l9Is5buV9ObeUMiTm8czTN--YA2hsyyPuxqnCAkbl3pocsq2VniO-xIp7ss0OEZWlZ8OuKfarTH7_TGvNBRNK42VfzarPQebaxY340DpK_ldSEYtT6WfQ82Pvsf4QHnqdvBiAmTicTO9z6BLIF0eNT1-r36wYdv6oG4Xk0KcWNooj2cPSpFw8Zr2TT2hsJtAaqPHOOUKlX-qcu5EIvCwMuJ7TES6BZg84e8pO9iRvN4pakHPVA'
  },
  {
    id: 'p4',
    name: 'Signature Leather Edition',
    description: 'Phiên bản giới hạn',
    price: 5500000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3GEUUkuk9-VW0OgtIoyCjUfEOGuyiFjp7pIO1D98DCA93ZwWShNkibH5hPi5OGYqzoAiihxShKoRfMMNYy5o2NkpS37DsgXG0vu7y7Ey0SMzVPGNKzZcZ5LdjbrO5Bk_I9z6Chdu3egpDpIKO7BKeRdodnh4SJDyrzAGRE01GwO6zdSMDdJ2ZOaj8Akb0rzPamTZbJkyMQTK5iubqKqcSBDHQ-0I_lKZifX9xv7s2C3XCe3UOVkTxhPgDkkk5funZ9wJBkqTtPSVZ'
  }
];

export const NEW_COLLECTION: Product[] = [
  {
    id: 'nc1',
    name: 'Business Lite Grey',
    description: '',
    price: 1800000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhevGGLOKIqLxI8iDhKLEavzoU9NCQwzVGmAqJmLRO3EoZSFKjsIT58jXvexfCTDSUZRoB0nWW6nuBJUDVAE6ahXXaQ39140OIO3FXwsX4tIb46PWCrRgmVca-OXS6x2TNGjJyuoq5QL6pKt7S1TzRGXjghz0gmEIWUgVzmSnh88GXCoHBgmR7hw8kJwyKsqmK8gK6kBsJ6BjXM72ZU7jpxAyaSK3q81IYWlw7CndF7ddDayFix-QHOjWUn0_ptCktX3KHVERLD4ZB'
  },
  {
    id: 'nc2',
    name: 'Premium Leather Tan',
    description: '',
    price: 3200000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEvcFSssss22MaUIjVJYq-hhzsdb2KjftB_oytNzV9QPxG4C5KMAXmKo_pKzAc2FNK3pMrxIn-pm_MpbF3xlZ4EHqdhWbe00h0xjQlSXahLbGxu4dUgFUr7JQSmNNZgwyGIY2PFtZBxYOicJfWs_2m0vaF400TOglIXXpPNQTa43qdWxyOCuj0gXSOA1CYKVIbDhQGiI283W0dWaBKDahVAhvCRqL_sEZNKQNIKhYVhtVyJEBPS-FU9i-6yuljYvnMB8jfznD0UiPu'
  },
  {
    id: 'nc3',
    name: 'Urban Waterproof Shield',
    description: '',
    price: 9500000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlh6ENMdT0sO9svpVlLqdz_2t6_o3g-qfzv5eMU0mUmCiIdQUorZ5NnpUqpfdtSieMj6rdFLS91sQdIqoJRwk26FweVtlsAMwYWvZDIqS85Zj6J4uguHy8GeywDmGHhBicGjbr9JG8iJ2gRORmcPW8ifko8GCNUwAs3jxqsMrZ1bv0O65zN5Xe87qV6IqkAgdcSl9jZ1hpNPq8zD_ZVnPGmpUl3NnkWC8VlcjnhFYnJyj6N2kmcfC9arHesXsFTnZvEiEF1fw3k-b2'
  },
  {
    id: 'nc4',
    name: 'Navy Classic Carrier',
    description: '',
    price: 1450000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnHt3FKe8rQyg3g7OSM-ibFxolwfFUE0lRC-KzGmhgFyQSmRA_PZtaG9elUa3eBkBbMcAJyem54VzrM0aYXoBKVXrBtMjYiVKRur6shDuMp4QNHlbyAKl54NuNiMPRgVQ5dZnPLo5gW3aBTS1Mwg0B50GNXUz3zHgiZvyixzZKsWtC9ey0UxmZQ-tX0cBTiQ-PhwzFGQY9Z3m34IXIBaGWVWE1O1gXTj8c-ZSxjlXE9ZbOsDOIRCZM5C5ZfMgF7rb6pXaPmb7bQ_u_'
  }
];
