STAGING_BUCKET := s3://staging.data.humancellatlas.org/
INTEGRATION_BUCKET := s3://integration.data.humancellatlas.org/
DEV_BUCKET := s3://dev.data.humancellatlas.org/

.EXPORT_ALL_VARIABLES:

build:
	./build.sh

deploy-staging:
	aws s3 sync --acl public-read site/ $(STAGING_BUCKET) --profile hca

deploy-staging-travis:
	aws s3 sync --acl public-read site/ $(STAGING_BUCKET)
	aws cloudfront create-invalidation --distribution-id ${STAGING_DIST_ID} --paths "/*"

deploy-integration-travis:
	aws s3 sync --acl public-read public/ $(INTEGRATION_BUCKET)
	aws cloudfront create-invalidation --distribution-id ${INTEGRATION_DIST_ID} --paths "/*"

deploy-dev-travis:
	aws s3 sync --acl public-read public/ $(DEV_BUCKET)
	aws cloudfront create-invalidation --distribution-id ${DEV_DIST_ID} --paths "/*"
