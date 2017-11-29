mysql_deamon = ys-mysql
mysql_image = daocloud.io/mysql:5.6
mysql_port = 3308

default:
	make mysql.rebuild

mysql.install:
	make mysql.rebuild	

mysql.rebuild:
	docker rm -vf $(mysql_deamon) || true
	rm -rf ./docker_volumes/mysql
	mkdir -p ./docker_volumes/mysql
	docker pull $(mysql_image)
	docker run --name $(mysql_deamon) -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -v `pwd`/docker_volumes/mysql:/var/lib/mysql -p $(mysql_port):$(mysql_port) -d $(mysql_image) --port=$(mysql_port)
	@echo "正在启动mysql，请耐心等待..."
	sleep 30
	docker ps -a | grep $(mysql_deamon)

mysql.restart:
	make mysql.stop

	@echo "正在启动mysql，请耐心等待...(如果尚未安装 mysql，请使用命令: make mysql.install 进行安装)"
	docker start $(mysql_deamon)
	sleep 30
	docker ps -a | grep $(mysql_deamon)

mysql.stop:
	@echo "正在关闭mysql，请耐心等待...(如果尚未安装 mysql，请使用命令: make mysql.install 进行安装)"
	docker stop $(mysql_deamon) || true

mysql.data:
	mysql -f -h127.0.0.1 -P$(mysql_port) -uroot < ./sqls/demo.sql
	mysql -f -h127.0.0.1 -P$(mysql_port) -uroot < ./sqls/demo_data.sql
	