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
	yarn start:dev

down:
	docker compose down

## TypeORM Operation
migration.sync:
	@yarn typeorm schema:sync
	@yarn seed:run

migration.drop:
	@yarn typeorm schema:drop

migration:
	@yarn typeorm migration:run

migration.gen:
	@yarn typeorm migration:generate -n $(name)

migration.create:
	@yarn typeorm migration:create -n $(name)

migration.rollback:
	@yarn typeorm migration:revert

seed:
	@yarn seed:run