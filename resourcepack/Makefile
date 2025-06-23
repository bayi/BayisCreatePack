DIST=BayisCreateSkyblockRP.zip

all: build

build:
	@rm ${DIST} || true
	@echo " * Creating ${DIST} ..."
	@cd src && zip -r -r ../${DIST} .
	
test: build
	@cp ${DIST} "/data/Games/com.modrinth.theseus/profiles/Bayi_s Create Skyblock Pack/config/openloader/packs/"
