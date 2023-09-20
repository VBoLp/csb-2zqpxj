/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameOver extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./GameOver/costumes/Kostüm1.svg", {
        x: 233.1749972957249,
        y: 198.77031119851875
      })
    ];

    this.sounds = [new Sound("Plopp", "./GameOver/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveGameOver() {
    this.visible = true;
    this.stage.vars.men = "Lade";
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }
}
