GOOGLE_PROJECT_ID=camerlang-development
CLOUD_RUN_SERVICE=camerlang-api-service
INSTANCE_CONNECTION_NAME=camerlang-development:us-central1:camerlang-rest-api
DB_USERNAME=root
DB_PASSWORD=qwerty123
DB_NAME=camerlang_db
DB_HOSTNAME=35.226.234.192
DB_PORT=3306

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
  --project=$GOOGLE_PROJECT_ID

gcloud run deploy $CLOUD_RUN_SERVICE \
  --image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
  --add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
  --update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME,DB_PASSWORD=$DB_PASSWORD,DB_USERNAME=$DB_USERNAME,DB_NAME=$DB_NAME,DB_HOSTNAME=$DB_HOSTNAME,DB_PORT=$DB_PORT \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --project=$GOOGLE_PROJECT_ID