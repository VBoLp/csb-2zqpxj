/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GeldzHler extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./GeldzHler/costumes/0.svg", {
        x: 18.75,
        y: 14.67186000000001
      }),
      new Costume("1", "./GeldzHler/costumes/1.svg", {
        x: 18.75,
        y: 14.838526666666638
      }),
      new Costume("2", "./GeldzHler/costumes/2.svg", {
        x: 18.75,
        y: 15.171864999999997
      }),
      new Costume("3", "./GeldzHler/costumes/3.svg", {
        x: 18.75,
        y: 15.171859999999981
      }),
      new Costume("4", "./GeldzHler/costumes/4.svg", {
        x: 18.75,
        y: 15.17186000000001
      }),
      new Costume("5", "./GeldzHler/costumes/5.svg", {
        x: 18.75,
        y: 15.171854999999994
      }),
      new Costume("6", "./GeldzHler/costumes/6.svg", {
        x: 18.75,
        y: 15.171849999999978
      }),
      new Costume("7", "./GeldzHler/costumes/7.svg", {
        x: 18.75,
        y: 15.171844999999962
      }),
      new Costume("8", "./GeldzHler/costumes/8.svg", {
        x: 18.75,
        y: 15.17184999999995
      }),
      new Costume("9", "./GeldzHler/costumes/9.svg", {
        x: 18.75,
        y: 15.171844999999934
      }),
      new Costume("10", "./GeldzHler/costumes/10.svg", {
        x: 26.375,
        y: 15.171849999999921
      })
    ];

    this.sounds = [new Sound("Plopp", "./GeldzHler/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 100000; i++) {
      this.deleteThisClone();
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *startAsClone() {
    this.moveAhead();
    this.goto(
      this.toNumber(this.stage.vars.todespunktGegnerX),
      this.toNumber(this.stage.vars.todespunktGegnerY)
    );
    this.x += 8;
    this.y += 8;
    yield* this.wait(0.01);
    if (this.toNumber(this.stage.vars.verdienst) === 0) {
      this.costume = 0;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 1) {
      this.costume = 1;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 2) {
      this.costume = 2;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 3) {
      this.costume = 3;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 4) {
      this.costume = 4;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 5) {
      this.costume = 5;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 6) {
      this.costume = 6;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 7) {
      this.costume = 7;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 8) {
      this.costume = 8;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 9) {
      this.costume = 9;
    }
    if (this.toNumber(this.stage.vars.verdienst) === 10) {
      this.costume = 10;
    }
    this.visible = true;
    for (let i = 0; i < 5; i++) {
      this.y += 1;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.y += 1;
      this.effects.ghost += 20;
      yield* this.wait(0.06);
      yield;
    }
    this.deleteThisClone();
  }
}
