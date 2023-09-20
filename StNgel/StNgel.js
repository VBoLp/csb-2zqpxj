/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StNgel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./StNgel/costumes/1.svg", {
        x: 25.53016329034051,
        y: -7.4445149999999956
      }),
      new Costume("2", "./StNgel/costumes/2.svg", {
        x: 25.53016993551077,
        y: -7.444524999999999
      }),
      new Costume("3", "./StNgel/costumes/3.svg", {
        x: 25.530166580681026,
        y: -7.4445349999999735
      }),
      new Costume("4", "./StNgel/costumes/4.svg", {
        x: 25.53016164517024,
        y: -7.444535000000002
      })
    ];

    this.sounds = [new Sound("Plopp", "./StNgel/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
        this.whenIReceiveStart
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }

  *whenIReceive1Upgrade1() {
    this.costume = 2;
  }

  *whenIReceive1Upgrade2() {
    this.costume = 3;
  }

  *whenIReceive1Upgrade0() {
    this.costume = 4;
  }

  *whenIReceiveStart() {
    this.costume = 1;
    this.visible = true;
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }
}
