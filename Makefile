KUBEJS_FOLDER="/data/Games/com.modrinth.theseus/profiles/Bayi_s Create Skyblock Pack/kubejs"
CONFIG_FOLDER="/data/Games/com.modrinth.theseus/profiles/Bayi_s Create Skyblock Pack/config"

all:
	@rm -rf ${KUBEJS_FOLDER}
	@cp -r src ${KUBEJS_FOLDER}
	@cp -r config/* ${CONFIG_FOLDER}
