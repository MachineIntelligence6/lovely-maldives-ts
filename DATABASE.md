# Lovely Maldives database modeling

### SiteConfig

- id
- site_name
- logo_primary
- logo_secondary
- icon_logo_primary
- icon_logo_secondary
- right_art_image

### Page (pages)

- id
- slug
- title
- content
- page_metadata (one-to-one)
- page_opengraph (one-to-one)
- page_opengraph_twitter (one-to-one)

### PageMetadata (page_metadata)

- id
- page (one-to-one)
- title
- description
- generator
- applicationName
- referrer
- keywords
- authors
- creator
- publisher
- formatDetection
  - email
  - address
  - telephone
- metadataBase
- alternates
  - canonical
  - languages
- robots
  - index
  - follow

### PageOpenGraph (page_open_graph)

- id
- page (one-to-one)
- title
- description
- url
- site_name
- images
- locale
- type
- publishedTime
- authors

### PageMetadataTwitter (page_metadata_twitter)

- id
- page (one-to-one)
- card
- title
- description
- siteId
- creator
- creatorId
- images
  - url
  - alt
- app
  - name
  - id
    - iphone
    - ipad
    - googleplay
  - url
    - iphone
    - ipad

### HomePageHero (home_page_hero)

- id
- heading
- subheading
- images
- isActive

### Services (services)

- id
- heading
- slogan
- slides
  - title
  - icon

### ExploreSlider (explore_slider)

- id
- heading
- slides
  - title
  - image

### TopBrands (top_brands)

- id
- heading
- cardHeading
- cardSubheading
- cardImage
- whatsapp_link
- slides
  - title
  - rating
  - slug

### AboutMaldivesPage (about_maldives_page)

- main_image
- main_image_caption
- sub_image
- sub_image_caption

## Faqs

### Questions

- id
- content
- answer_content
- category (many-to-one)

### FaqsCategory

- id
- title
- questions (one-to-many)

### PrivacyPolicies

- id
- title
- content

### Messages (Contact Us)

- id
- name
- email
- contact_number
- message

### Subscribers

- id
- email
- token
- status

### Users

- id
- email
- password
- role
- avatar
- contactNumber
- address
- dateOfBirth
- socialMediaProfiles
- lastLogin
- reviews
- preferences
- notifications
- createdAt
- updatedAt

### Articles

- id
- slug
- title
- description
- featured
- content
- author
- images
- comments
- commentStatus
- category
- tags
- publishedAt
- createdAt
- updatedAt

### ArticleCategories

- id
- name
- slug

### Comments

- id
- postId
- parentCommentId
- content
- author
- status
- likesCount
- dislikesCount
- publishedAt
- createdAt
- updatedAt

### Tags

- id
- name
- slug
- description
- articleCount

### Images

- id
- src
- alt
- entity

### Reviews

- id
- user
- category
- rating
- comment
- status
- createdAt
- updatedAt

### Categories

- id
- slug
- name
- description
- location
  - lat
  - lon
- country
- city
- images
- pricePerNight
- currency
- availableRooms
- maxGuestsPerRoom
- amenities
- facts
- reviews
- contactEmail
- contactPhone
- type (many-to-one)
- createdAt
- updatedAt

### Types

- id
- name
- categories (one-to-many)
