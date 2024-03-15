/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */

export interface Resort {
  id: number
  name: string
  location: string
  city: string
  country: string
  slug: string
  rating: number
  description: string
  image_url: string
  amenities: string[]
  price_per_night: number
  currency: string
  contact_email: string
  contact_phone: string
}

export const resorts: Resort[] = [
  {
    id: 1,
    name: 'Sunset Beach Resort, Miami, United States of America',
    location: '123 Ocean Drive',
    city: 'Miami',
    country: 'United States',
    slug: 'sunset-beach-resort',
    rating: 4.5,
    description:
      "Escape to the serenity of Sunset Beach Resort. With its breathtaking ocean views and luxurious amenities, it's the perfect destination for a relaxing getaway.",
    image_url: 'https://example.com/sunset-beach-resort.jpg',
    amenities: [
      'Private beach access',
      'Swimming pool',
      'Spa',
      'Gourmet dining',
    ],
    price_per_night: 250,
    currency: 'USD',
    contact_email: 'info@sunsetbeachresort.com',
    contact_phone: '+1-123-456-7890',
  },
  {
    id: 2,
    name: 'Mountain Vista Lodge',
    location: '456 Pine Trail',
    city: 'Aspen',
    country: 'United States',
    slug: 'mountain-vista-lodge',
    rating: 4.8,
    description:
      'Nestled in the heart of the Rocky Mountains, Mountain Vista Lodge offers unparalleled luxury and breathtaking views. Experience the beauty of nature in style.',
    image_url: 'https://example.com/mountain-vista-lodge.jpg',
    amenities: [
      'Ski-in/ski-out access',
      'Hot tub',
      'Fine dining',
      'Fitness center',
    ],
    price_per_night: 350,
    currency: 'USD',
    contact_email: 'info@mountainvistalodge.com',
    contact_phone: '+1-987-654-3210',
  },
  {
    id: 3,
    name: 'Tropical Paradise Resort',
    location: '789 Palm Avenue',
    city: 'Maui',
    country: 'United States',
    slug: 'tropical-paradise-resort',
    rating: 4.7,
    description:
      'Indulge in luxury surrounded by lush tropical gardens and pristine beaches at Tropical Paradise Resort. Experience the ultimate island getaway.',
    image_url: 'https://example.com/tropical-paradise-resort.jpg',
    amenities: [
      'Beachfront villas',
      'Infinity pool',
      'Poolside bar',
      'Water sports activities',
    ],
    price_per_night: 450,
    currency: 'USD',
    contact_email: 'info@tropicalparadiseresort.com',
    contact_phone: '+1-555-123-4567',
  },
  {
    id: 1,
    name: 'Sunset Beach Resort',
    location: '123 Ocean Drive',
    city: 'Miami',
    country: 'United States',
    slug: 'sunset-beach-resort',
    rating: 4.5,
    description:
      "Escape to the serenity of Sunset Beach Resort. With its breathtaking ocean views and luxurious amenities, it's the perfect destination for a relaxing getaway.",
    image_url: 'https://example.com/sunset-beach-resort.jpg',
    amenities: [
      'Private beach access',
      'Swimming pool',
      'Spa',
      'Gourmet dining',
    ],
    price_per_night: 250,
    currency: 'USD',
    contact_email: 'info@sunsetbeachresort.com',
    contact_phone: '+1-123-456-7890',
  },
  {
    id: 2,
    name: 'Mountain Vista Lodge',
    location: '456 Pine Trail',
    city: 'Aspen',
    country: 'United States',
    slug: 'mountain-vista-lodge',
    rating: 4.8,
    description:
      'Nestled in the heart of the Rocky Mountains, Mountain Vista Lodge offers unparalleled luxury and breathtaking views. Experience the beauty of nature in style.',
    image_url: 'https://example.com/mountain-vista-lodge.jpg',
    amenities: [
      'Ski-in/ski-out access',
      'Hot tub',
      'Fine dining',
      'Fitness center',
    ],
    price_per_night: 350,
    currency: 'USD',
    contact_email: 'info@mountainvistalodge.com',
    contact_phone: '+1-987-654-3210',
  },
  {
    id: 3,
    name: 'Tropical Paradise Resort',
    location: '789 Palm Avenue',
    city: 'Maui',
    country: 'United States',
    slug: 'tropical-paradise-resort',
    rating: 4.7,
    description:
      'Indulge in luxury surrounded by lush tropical gardens and pristine beaches at Tropical Paradise Resort. Experience the ultimate island getaway.',
    image_url: 'https://example.com/tropical-paradise-resort.jpg',
    amenities: [
      'Beachfront villas',
      'Infinity pool',
      'Poolside bar',
      'Water sports activities',
    ],
    price_per_night: 450,
    currency: 'USD',
    contact_email: 'info@tropicalparadiseresort.com',
    contact_phone: '+1-555-123-4567',
  },
]

export function filterResorts(
  resorts: Resort[],
  minRating: number,
  maxPrice: number
): Resort[] {
  return resorts.filter(
    (resort) => resort.rating >= minRating && resort.price_per_night <= maxPrice
  )
}
