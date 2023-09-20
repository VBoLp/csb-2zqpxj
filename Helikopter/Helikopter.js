/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Helikopter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Helikopter/costumes/Kostüm1.svg", {
        x: 5.280919999999952,
        y: 18.244588769996824
      }),
      new Costume("Kostüm5", "./Helikopter/costumes/Kostüm5.svg", {
        x: 5.280935000000511,
        y: 18.24458202346551
      }),
      new Costume("Kostüm2", "./Helikopter/costumes/Kostüm2.svg", {
        x: 5.2809350000005395,
        y: 17.7444104079716
      }),
      new Costume("Kostüm6", "./Helikopter/costumes/Kostüm6.svg", {
        x: 5.2809350000005395,
        y: 17.88708845187216
      }),
      new Costume("Kostüm3", "./Helikopter/costumes/Kostüm3.svg", {
        x: 5.764985000000024,
        y: 18.244598354963614
      }),
      new Costume("Kostüm7", "./Helikopter/costumes/Kostüm7.svg", {
        x: 5.280935000000454,
        y: 18.244555277351395
      }),
      new Costume("Kostüm4", "./Helikopter/costumes/Kostüm4.svg", {
        x: 5.280924999999769,
        y: 17.744410880743317
      }),
      new Costume("Kostüm8", "./Helikopter/costumes/Kostüm8.svg", {
        x: 5.280924999999826,
        y: 18.173006997482446
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Helikopter/sounds/Plopp.wav"),
      new Sound("fly", "./Helikopter/sounds/fly.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore Anfrage" },
        this.whenIReceiveHardcoreAnfrage
      )
    ];

    this.audioEffects.volume = 50;
  }

  *startAsClone() {
    this.stage.vars.heliOnscreen++;
    this.size = this.random(60, 80);
    this.effects.color = this.random(0, 100);
    this.goto(240, this.random(-175, 175));
    this.visible = true;
    while (true) {
      this.move(-1);
      if (
        this.touching(this.sprites["Kugel"].andClones()) ||
        this.touching(this.sprites["Kugel2"].andClones()) ||
          this.touching(this.sprites["Kugel3"].andClones()) ||
            this.touching(this.sprites["KugelItemPflanze1"].andClones()) ||
              this.touching(this.sprites["KaufenItemPflanze2"].andClones())
      ) {
        this.stage.vars.todespunktGegnerX = this.x;
        this.stage.vars.todespunktGegnerY = this.y;
        this.stage.vars.verdienst = this.random(1, 4);
        this.sprites["GeldzHler"].createClone();
        this.stage.vars.punkte++;
        this.stage.vars.euro += this.toNumber(this.stage.vars.verdienst);
        for (let i = 0; i < 2; i++) {
          this.effects.brightness = 40;
          yield* this.wait(0.05);
          this.effects.brightness = 0;
          yield* this.wait(0.05);
          yield;
        }
        this.effects.ghost = 25;
        yield* this.wait(0.05);
        this.effects.ghost = 50;
        yield* this.wait(0.05);
        this.effects.ghost = 75;
        yield* this.wait(0.05);
        this.stage.vars.heliOnscreen--;
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      yield* this.wait(0.05);
      this.costumeNumber++;
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.y += 0.5;
        yield* this.wait(0.05);
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.y -= 0.5;
        yield* this.wait(0.05);
        yield;
      }
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      if (this.touching(this.sprites["Linie"].andClones())) {
        yield* this.wait(0.5);
        if (this.touching(this.sprites["Linie"].andClones())) {
          this.broadcast("Game Over");
        }
      }
      yield;
    }
  }

  *startAsClone5() {
    while (true) {
      this.stage.vars.richtungErbseX = this.x;
      this.stage.vars.richtungErbseY = this.y;
      yield;
    }
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 10000; i++) {
      this.stage.vars.heliOnscreen = 0;
      this.deleteThisClone();
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
  }

  *whenIReceiveSpielStart2() {
    this.stage.vars.heliOnscreen = 0;
    while (true) {
      if (this.compare(this.stage.vars.heliOnscreen, 0) > 0) {
        this.audioEffects.volume = 50;
        yield* this.playSoundUntilDone("fly");
      }
      if (this.compare(this.stage.vars.heliOnscreen, 10) > 0) {
        yield* this.playSoundUntilDone("fly");
        this.audioEffects.volume = 100;
      }
      yield;
    }
  }

  *whenIReceiveHardcore() {
    this.stage.vars.spawngeschwindigkeitHelilopter = 3.7;
    for (let i = 0; i < 10000; i++) {
      this.stage.vars.heliOnscreen = 0;
      this.deleteThisClone();
      yield;
    }
  }

  *whenIReceiveHardcoreAnfrage() {
    for (let i = 0; i < 10000; i++) {
      this.stage.vars.heliOnscreen = 0;
      this.deleteThisClone();
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
