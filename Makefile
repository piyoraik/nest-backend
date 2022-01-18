## Git Operation
develop:
	@git checkout -b feature-$(issue) 
	git commit --allow-empty -m "開発開始"
	git push origin feature-$(issue)
	gh pr create -b "close #$(issue)" -a @me -w

fix:
	@git checkout -b fix-$(issue) && \
	git commit --allow-empty -m "修正開始" && \
	git push origin fix-$(issue) && \
	gh pr create -b "close #$(issue)" -a @me -w

up:
	docker compose up -d
	docker logs -f node

down:
	docker compose down

## TypeORM Operation
migration:
	@npm run typeorm migration:run

migration.gen:
	@npm run typeorm migration:generate -n $(name)

migration.create:
	@npm run typeorm migration:create -n $(name)

migration.rollback:
	@npm run typeorm migration:revert