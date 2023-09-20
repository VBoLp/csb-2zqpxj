/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pflanze extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Peashooter", "./Pflanze/costumes/Peashooter.svg", {
        x: 21.7427067703384,
        y: 21.701098605015744
      }),
      new Costume("Peashooter1", "./Pflanze/costumes/Peashooter1.svg", {
        x: 21.74270196264814,
        y: 21.701090484783037
      }),
      new Costume("Peashooter2", "./Pflanze/costumes/Peashooter2.svg", {
        x: 21.742705981324065,
        y: 21.701095242391517
      }),
      new Costume("Peashooter3", "./Pflanze/costumes/Peashooter3.svg", {
        x: 21.742710981324052,
        y: 21.701100242391504
      })
    ];

    this.sounds = [new Sound("Plopp", "./Pflanze/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1 Upgrade 1" },
        this.whenIReceive1Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1 Upgrade 2" },
        this.whenIReceive1Upgrade2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1 Upgrade 0" },
        this.whenIReceive1Upgrade0
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart6
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      if (
        this.compare(this.direction, 10) < 0 &&
        this.compare(this.direction, -90) > 0
      ) {
        this.direction = 10;
      }
      if (
        this.compare(this.direction, 170) > 0 ||
        this.compare(this.direction, -90) < 0
      ) {
        this.direction = 170;
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    yield* this.wait(0.2);
    while (true) {
      if (this.mouse.down) {
        this.sprites["Kugel"].createClone();
        yield* this.wait(this.toNumber(this.stage.vars.wartezeitPflanze1));
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    this.stage.vars.spawngeschwindigkeitHelilopter = 3.7;
    while (true) {
      if (this.toString(this.stage.vars.hardcore) === "Nein") {
        yield* this.wait(
          this.toNumber(this.stage.vars.spawngeschwindigkeitHelilopter)
        );
        this.sprites["Helikopter"].createClone();
      }
      yield;
    }
  }

  *whenIReceiveStart4() {
    while (true) {
      yield* this.wait(12);
      this.stage.vars.spawngeschwindigkeitHelilopter -= 0.185;
      if (
        this.compare(this.stage.vars.spawngeschwindigkeitHelilopter, 0.6) < 0 &&
        this.compare(this.stage.vars.spawngeschwindigkeitHelilopter, 0.5) > 0
      ) {
        yield* this.wait(20);
      }
      if (
        this.compare(this.stage.vars.spawngeschwindigkeitHelilopter, 0.15) < 0
      ) {
        while (true) {
          this.stage.vars.spawngeschwindigkeitHelilopter = 0.2;
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStart5() {
    this.costume = "Peashooter";
    this.stage.vars.punkte = 0;
  }

  *whenIReceive1Upgrade1() {
    this.costume = "Peashooter1";
  }

  *whenIReceive1Upgrade2() {
    this.costume = "Peashooter2";
  }

  *whenIReceive1Upgrade0() {
    this.costume = "Peashooter3";
  }

  *whenIReceiveStart6() {
    this.costume = "Peashooter";
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveSpielStart() {
    this.stage.vars.euro = 0;
    this.stage.vars.punkte = 0;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }

  *whenIReceiveSpielStart2() {
    while (true) {
      if (this.compare(this.stage.vars.punkte, 599) > 0) {
        0;
      }
      yield;
    }
  }

  *whenIReceiveHardcore() {
    this.stage.vars.spawngeschwindigkeitHelilopter = 3.7;
    while (true) {
      yield* this.wait(
        this.toNumber(this.stage.vars.spawngeschwindigkeitHelilopter)
      );
      this.sprites["Helikopter"].createClone();
      yield;
    }
  }
}
