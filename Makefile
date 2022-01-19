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

sync:
	docker container exec -it node bash -c "yarn typeorm schema:sync"

drop:
	docker container exec -it node bash -c "yarn typeorm schema:drop"

## TypeORM Operation
migration:
	@npx typeorm migration:run

migration.gen:
	@npx typeorm migration:generate -n $(name)

migration.create:
	@npx typeorm migration:create -n $(name)

migration.rollback:
	@npx typeorm migration:revert