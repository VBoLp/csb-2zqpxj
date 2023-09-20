/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StNgel2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./StNgel2/costumes/1.svg", {
        x: 25.53016329034051,
        y: -7.4445149999999956
      }),
      new Costume("2", "./StNgel2/costumes/2.svg", {
        x: 25.530171645170242,
        y: -7.444524999999999
      }),
      new Costume("3", "./StNgel2/costumes/3.svg", {
        x: 25.53016164517024,
        y: -7.444545000000005
      }),
      new Costume("4", "./StNgel2/costumes/4.svg", {
        x: 25.530166516191798,
        y: -7.444595000000021
      })
    ];

    this.sounds = [new Sound("Plopp", "./StNgel2/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pflanze 2" },
        this.whenIReceivePflanze2
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
        { name: "2 Upgrade 1" },
        this.whenIReceive2Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 2" },
        this.whenIReceive2Upgrade2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 0" },
        this.whenIReceive2Upgrade0
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

  *whenIReceivePflanze2() {
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

  *whenIReceive2Upgrade1() {
    this.costume = 2;
  }

  *whenIReceive2Upgrade2() {
    this.costume = 3;
  }

  *whenIReceive2Upgrade0() {
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
