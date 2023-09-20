/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StNgel3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./StNgel3/costumes/1.svg", {
        x: 25.53016329034051,
        y: -7.4445149999999956
      }),
      new Costume("2", "./StNgel3/costumes/2.svg", {
        x: 25.53016993551077,
        y: -7.444524999999999
      }),
      new Costume("3", "./StNgel3/costumes/3.svg", {
        x: 25.53016164517024,
        y: -7.444545000000005
      }),
      new Costume("4", "./StNgel3/costumes/4.svg", {
        x: 25.530158290340495,
        y: -7.444555000000008
      })
    ];

    this.sounds = [new Sound("Plopp", "./StNgel3/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pflanze 3" },
        this.whenIReceivePflanze3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
        { name: "3 Upgrade 1" },
        this.whenIReceive3Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 2" },
        this.whenIReceive3Upgrade2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 0" },
        this.whenIReceive3Upgrade0
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceivePflanze3() {
    this.effects.ghost = 75;
    this.visible = true;
    yield* this.wait(0.1);
    this.effects.ghost = 50;
    yield* this.wait(0.1);
    this.effects.ghost = 25;
    yield* this.wait(0.1);
    this.effects.ghost = 0;
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    this.costume = 1;
  }

  *whenIReceive3Upgrade1() {
    this.costume = 2;
  }

  *whenIReceive3Upgrade2() {
    this.costume = 3;
  }

  *whenIReceive3Upgrade0() {
    this.costume = 4;
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
