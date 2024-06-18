const conf = {
    appWriteUrl: String(import.meta.url.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.url.VITE_APPWRITE_PROJECT_ID),
    appWriteCollectionId: String(import.meta.url.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.url.VITE_APPWRITE_BUCKET_ID),
    appWriteDatabaseId: String(import.meta.url.VITE_APPWRITE_DATABASE_ID),
}


export default conf