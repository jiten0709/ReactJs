
# Mega Blog

A Blog page made using React + VITE.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### appwrite
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your key"
VITE_APPWRITE_DATABASE_ID="your key"
VITE_APPWRITE_COLLECTION_ID="your key"
VITE_APPWRITE_BUCKET_ID="your key"
#### tinymce
TINYMCE_API_KEY="your key"


## API Reference

#### Appwrite

- Step 1: signin into Appwrite

- Step 2: create a project named 'MegaBlog'

- Step 3: create a database named 'blog'

- Step 4: create a collection named 'articles'

- Step 5: create following attributes...

| key | Type     | Required  | size |
| :-------- | :------- | :------------------------- | :----------|
| title | string | true | 300 |
| content | string | true | 300 |
| featuredImage | string | true | 300 |
| userId | string | true | 300 |
| status | string | false | 300 |

- Step 6: in the 'storage' section, create a buckect named 'images'

- Step 7: then in 'overview' section, add a 'web app' platform under 'integrations', and assign hostname as 'localhost'


