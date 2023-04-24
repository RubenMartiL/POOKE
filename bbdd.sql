USE dbs10713944;

CREATE TABLE users (
    id INT(11) AUTO_INCREMENT,
    nickname VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    creationDate DATE,
    PRIMARY KEY(id)
);

CREATE TABLE pokemonUser (
    id INT(11) AUTO_INCREMENT,
    id_user INT(11),
    id_pokemon INT(11),
    name_pokemon VARCHAR(50),
    lvl_pokemon INT(3),
    ivs_ps_pokemon INT(3),
    ivs_attack_pokemon INT(3),
    ivs_defense_pokemon INT(3),
    ivs_sattack_pokemon INT(3),
    ivs_sdefense_pokemon INT(3),
    ivs_speed_pokemon INT(3),
    evs_ps_pokemon INT(3),
    evs_attack_pokemon INT(3),
    evs_defense_pokemon INT(3),
    evs_sattack_pokemon INT(3),
    evs_sdefense_pokemon INT(3),
    evs_speed_pokemon INT(3),
    naturaleza INT(1),
    move_one INT(3) DEFAULT 1,
    move_two INT(3) DEFAULT 1,
    move_three INT(3) DEFAULT 1,
    move_four INT(3) DEFAULT 1,
    PRIMARY KEY(id)
);

CREATE TABLE userTeam (
    id INT(11) AUTO_INCREMENT,
    id_user INT(11),
    id_pokemon INT(11),
    position INT(1),
    PRIMARY KEY(id)
);

INSERT INTO users VALUES(null,'Ruben',123,'rubenmarti@gmail.com',null);
INSERT INTO pokemonUser (`id`, `id_user`, `id_pokemon`, `name_pokemon`, `lvl_pokemon`, `ivs_ps_pokemon`, `ivs_attack_pokemon`, `ivs_defense_pokemon`, `ivs_sattack_pokemon`, `ivs_sdefense_pokemon`, `ivs_speed_pokemon`, `evs_ps_pokemon`, `evs_attack_pokemon`, `evs_defense_pokemon`, `evs_sattack_pokemon`, `evs_sdefense_pokemon`, `evs_speed_pokemon`, `naturaleza`, `move_one`, `move_two`, `move_three`, `move_four`) VALUES (NULL, '1', '30', NULL, '5', '15', '11', '10', '8', '25', '17', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', '2', '3', '4'); 

