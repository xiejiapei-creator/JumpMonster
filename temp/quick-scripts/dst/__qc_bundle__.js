
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4644f0m2WtABYRy+pn6dOaG', 'Star');
// scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 星星和主角之间的距离小于这个数值时，就会完成收集
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    // 根据 player 节点位置判断距离
    var playerPos = this.game.player.getPosition(); // 根据两点位置计算两点之间距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    this.game.spawnNewStar(); // 调用 Game 脚本的得分方法

    this.game.gainScore(); // 然后销毁当前星星节点

    this.node.destroy();
  },
  update: function update(dt) {
    // 每帧判断和主角之间的距离是否小于收集距离
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    } // 根据 Game 脚本中的计时器更新星星的透明度


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0YXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaWNrUmFkaXVzIiwiZ2V0UGxheWVyRGlzdGFuY2UiLCJwbGF5ZXJQb3MiLCJnYW1lIiwicGxheWVyIiwiZ2V0UG9zaXRpb24iLCJkaXN0Iiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwibWFnIiwib25QaWNrZWQiLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiLCJvcGFjaXR5UmF0aW8iLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsIm1pbk9wYWNpdHkiLCJvcGFjaXR5IiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFGSixHQUhQO0FBUUxDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBQzNCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FGMkIsQ0FHM0I7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNILEdBZEk7QUFnQkxLLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUNqQjtBQUNBLFNBQUtSLElBQUwsQ0FBVVMsWUFBVixHQUZpQixDQUdqQjs7QUFDQSxTQUFLVCxJQUFMLENBQVVVLFNBQVYsR0FKaUIsQ0FLakI7O0FBQ0EsU0FBS04sSUFBTCxDQUFVTyxPQUFWO0FBQ0gsR0F2Qkk7QUF5QkxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLZixpQkFBTCxLQUEyQixLQUFLRCxVQUFwQyxFQUFnRDtBQUM1QztBQUNBLFdBQUtXLFFBQUw7QUFDQTtBQUNILEtBTmlCLENBUWxCOzs7QUFDQSxRQUFJTSxZQUFZLEdBQUcsSUFBSSxLQUFLZCxJQUFMLENBQVVlLEtBQVYsR0FBZ0IsS0FBS2YsSUFBTCxDQUFVZ0IsWUFBakQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLYixJQUFMLENBQVVjLE9BQVYsR0FBb0JELFVBQVUsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFlBQVksSUFBSSxNQUFNRyxVQUFWLENBQXZCLENBQWpDO0FBQ0g7QUFyQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOaYn+aYn+WSjOS4u+inkuS5i+mXtOeahOi3neemu+Wwj+S6jui/meS4quaVsOWAvOaXtu+8jOWwseS8muWujOaIkOaUtumbhlxuICAgICAgICBwaWNrUmFkaXVzOiAwLFxuICAgIH0sXG5cbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDmoLnmja4gcGxheWVyIOiKgueCueS9jee9ruWIpOaWrei3neemu1xuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICAvLyDmoLnmja7kuKTngrnkvY3nva7orqHnrpfkuKTngrnkuYvpl7Tot53nprtcbiAgICAgICAgdmFyIGRpc3QgPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllclBvcykubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH0sXG5cbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOW9k+aYn+aYn+iiq+aUtumbhuaXtu+8jOiwg+eUqCBHYW1lIOiEmuacrOS4reeahOaOpeWPo++8jOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xuICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKCk7XG4gICAgICAgIC8vIOiwg+eUqCBHYW1lIOiEmuacrOeahOW+l+WIhuaWueazlVxuICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKCk7XG4gICAgICAgIC8vIOeEtuWQjumUgOavgeW9k+WJjeaYn+aYn+iKgueCuVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyDmr4/luKfliKTmlq3lkozkuLvop5LkuYvpl7TnmoTot53nprvmmK/lkKblsI/kuo7mlLbpm4bot53nprtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xuICAgICAgICAgICAgLy8g6LCD55So5pS26ZuG6KGM5Li6XG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOagueaNriBHYW1lIOiEmuacrOS4reeahOiuoeaXtuWZqOabtOaWsOaYn+aYn+eahOmAj+aYjuW6plxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lci90aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c688v72QdOKamCGCT+xaAd', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 跳跃音效资源
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // 下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // 创建一个缓动

    var tween = cc.tween() // 按 jumpUp，jumpDown 的顺序执行动作
    .sequence(jumpUp, jumpDown) // 添加一个回调函数，在前面的动作都结束时调用我们定义的 playJumpSound() 方法
    .call(this.playJumpSound, this); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  //触摸移动；
  onTouchMove: function onTouchMove(event) {
    var self = this;
    var touches = event.getTouches(); //触摸刚开始的位置

    var oldPos = self.node.parent.convertToNodeSpaceAR(touches[0].getStartLocation()); //触摸时不断变更的位置

    var newPos = self.node.parent.convertToNodeSpaceAR(touches[0].getLocation()); //var subPos = cc.pSub(oldPos,newPos); 1.X版本是cc.pSub

    var subPos = oldPos.sub(newPos); // 2.X版本是 p1.sub(p2);

    self.node.x = self.nodePos.x - subPos.x;
    self.node.y = self.nodePos.y - subPos.y; // 控制节点移不出屏幕; 

    var minX = -self.node.parent.width / 2 + self.node.width / 2; //最小X坐标；

    var maxX = Math.abs(minX);
    var minY = -self.node.parent.height / 2 + self.node.height / 2; //最小Y坐标；

    var maxY = Math.abs(minY);
    var nPos = self.node.getPosition(); //节点实时坐标；

    if (nPos.x < minX) {
      nPos.x = minX;
    }

    ;

    if (nPos.x > maxX) {
      nPos.x = maxX;
    }

    ;

    if (nPos.y < minY) {
      nPos.y = minY;
    }

    ;

    if (nPos.y > maxY) {
      nPos.y = maxY;
    }

    ;
    self.node.setPosition(nPos);
  },
  onTouchEnd: function onTouchEnd() {
    this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；
  },
  onTouchCancel: function onTouchCancel() {
    this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；
  },
  // this.node 是需要移动的节点
  onLoad: function onLoad() {
    // 初始化跳跃动作
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this); //节点初始位置,每次触摸结束更新

    this.nodePos = this.node.getPosition(); //触摸监听(this.node.parent是屏幕)
    //想达到按住节点，节点才能移动的效果，将监听函数注册到 this.node 上，去掉  .parent 即可

    this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1bXBIZWlnaHQiLCJqdW1wRHVyYXRpb24iLCJtYXhNb3ZlU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJydW5KdW1wQWN0aW9uIiwianVtcFVwIiwidHdlZW4iLCJieSIsInkiLCJlYXNpbmciLCJqdW1wRG93biIsInNlcXVlbmNlIiwiY2FsbCIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsIm9uS2V5VXAiLCJvblRvdWNoTW92ZSIsInNlbGYiLCJ0b3VjaGVzIiwiZ2V0VG91Y2hlcyIsIm9sZFBvcyIsIm5vZGUiLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldFN0YXJ0TG9jYXRpb24iLCJuZXdQb3MiLCJnZXRMb2NhdGlvbiIsInN1YlBvcyIsInN1YiIsIngiLCJub2RlUG9zIiwibWluWCIsIndpZHRoIiwibWF4WCIsIk1hdGgiLCJhYnMiLCJtaW5ZIiwiaGVpZ2h0IiwibWF4WSIsIm5Qb3MiLCJnZXRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJOb2RlIiwiVE9VQ0hfTU9WRSIsIlRPVUNIX0VORCIsIlRPVUNIX0NBTkNFTCIsIm9uRGVzdHJveSIsIm9mZiIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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LFNBQWYsQ0FBeUJFLE1BQTVDLEVBQW9ELEtBQUt2QyxPQUF6RCxFQUFrRSxJQUFsRTtBQUNILEdBakpJO0FBbUpMOEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFDbEI7QUFDQSxRQUFJLEtBQUtsRCxPQUFULEVBQWtCO0FBQ2QsV0FBS29DLE1BQUwsSUFBZSxLQUFLM0QsS0FBTCxHQUFheUUsRUFBNUI7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLaEQsUUFBVCxFQUFtQjtBQUN0QixXQUFLa0MsTUFBTCxJQUFlLEtBQUszRCxLQUFMLEdBQWF5RSxFQUE1QjtBQUNILEtBTmlCLENBT2xCOzs7QUFDQSxRQUFLNUIsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2EsTUFBZCxJQUF3QixLQUFLNUQsWUFBbEMsRUFBaUQ7QUFDN0M7QUFDQSxXQUFLNEQsTUFBTCxHQUFjLEtBQUs1RCxZQUFMLEdBQW9CLEtBQUs0RCxNQUF6QixHQUFrQ2QsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2EsTUFBZCxDQUFoRDtBQUNILEtBWGlCLENBYWxCOzs7QUFDQSxTQUFLM0IsSUFBTCxDQUFVUSxDQUFWLElBQWUsS0FBS21CLE1BQUwsR0FBY2MsRUFBN0I7QUFDSDtBQWxLSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXG4gICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXG4gICAgICAgIC8vIOWKoOmAn+W6plxuICAgICAgICBhY2NlbDogMCxcbiAgICAgICAgLy8g6Lez6LeD6Z+z5pWI6LWE5rqQXG4gICAgICAgIGp1bXBBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBydW5KdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IHRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pO1xuXG4gICAgICAgIC8vIOS4i+iQvVxuICAgICAgICB2YXIganVtcERvd24gPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IC10aGlzLmp1bXBIZWlnaHQgfSwgeyBlYXNpbmc6ICdzaW5lSW4nIH0pO1xuXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqFxuICAgICAgICB2YXIgdHdlZW4gPSBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIkganVtcFVw77yManVtcERvd24g55qE6aG65bqP5omn6KGM5Yqo5L2cXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bilcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOWcqOWJjemdoueahOWKqOS9nOmDvee7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahCBwbGF5SnVtcFNvdW5kKCkg5pa55rOVXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xuXG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxuICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKHR3ZWVuKTtcbiAgICB9LFxuXG4gICAgcGxheUp1bXBTb3VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDosIPnlKjlo7Dpn7PlvJXmk47mkq3mlL7lo7Dpn7NcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24gKGV2ZW50KSB7XG4gICAgICAgIC8vIHNldCBhIGZsYWcgd2hlbiBrZXkgcHJlc3NlZFxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVVwIChldmVudCkge1xuICAgICAgICAvLyB1bnNldCBhIGZsYWcgd2hlbiBrZXkgcmVsZWFzZWRcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIFxuIFxuICAgIC8v6Kem5pG456e75Yqo77ybXG4gICAgb25Ub3VjaE1vdmUgKGV2ZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5nZXRUb3VjaGVzKCk7XG4gICAgICAgIC8v6Kem5pG45Yia5byA5aeL55qE5L2N572uXG4gICAgICAgIHZhciBvbGRQb3MgPSBzZWxmLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoZXNbMF0uZ2V0U3RhcnRMb2NhdGlvbigpKTtcbiAgICAgICAgLy/op6bmkbjml7bkuI3mlq3lj5jmm7TnmoTkvY3nva5cbiAgICAgICAgdmFyIG5ld1BvcyA9IHNlbGYubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hlc1swXS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgXG4gICAgICAgIC8vdmFyIHN1YlBvcyA9IGNjLnBTdWIob2xkUG9zLG5ld1Bvcyk7IDEuWOeJiOacrOaYr2NjLnBTdWJcbiBcbiAgICAgICAgdmFyIHN1YlBvcyA9IG9sZFBvcy5zdWIobmV3UG9zKTsgLy8gMi5Y54mI5pys5pivIHAxLnN1YihwMik7XG4gXG4gICAgICAgIHNlbGYubm9kZS54ID0gc2VsZi5ub2RlUG9zLnggLSBzdWJQb3MueDtcbiAgICAgICAgc2VsZi5ub2RlLnkgPSBzZWxmLm5vZGVQb3MueSAtIHN1YlBvcy55O1xuICAgICAgICBcbiAgICAgICAgLy8g5o6n5Yi26IqC54K556e75LiN5Ye65bGP5bmVOyBcbiAgICAgICAgdmFyIG1pblggPSAtc2VsZi5ub2RlLnBhcmVudC53aWR0aC8yICsgc2VsZi5ub2RlLndpZHRoLzI7IC8v5pyA5bCPWOWdkOagh++8m1xuICAgICAgICB2YXIgbWF4WCA9IE1hdGguYWJzKG1pblgpO1xuICAgICAgICB2YXIgbWluWSA9IC1zZWxmLm5vZGUucGFyZW50LmhlaWdodC8yICsgc2VsZi5ub2RlLmhlaWdodC8yOyAvL+acgOWwj1nlnZDmoIfvvJtcbiAgICAgICAgdmFyIG1heFkgPSBNYXRoLmFicyhtaW5ZKTtcbiAgICAgICAgdmFyIG5Qb3MgPSBzZWxmLm5vZGUuZ2V0UG9zaXRpb24oKTsgLy/oioLngrnlrp7ml7blnZDmoIfvvJtcbiBcbiAgICAgICAgaWYgKG5Qb3MueCA8IG1pblgpIHtcbiAgICAgICAgICAgIG5Qb3MueCA9IG1pblg7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChuUG9zLnggPiBtYXhYKSB7XG4gICAgICAgICAgICBuUG9zLnggPSBtYXhYO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoblBvcy55IDwgbWluWSkge1xuICAgICAgICAgICAgblBvcy55ID0gbWluWTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5Qb3MueSA+IG1heFkpIHtcbiAgICAgICAgICAgIG5Qb3MueSA9IG1heFk7XG4gICAgICAgIH07XG4gICAgICAgIHNlbGYubm9kZS5zZXRQb3NpdGlvbihuUG9zKTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaEVuZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyAvL+iOt+WPluinpuaRuOe7k+adn+S5i+WQjueahG5vZGXlnZDmoIfvvJtcbiAgICB9LFxuXG4gICAgb25Ub3VjaENhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGVQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTsgLy/ojrflj5bop6bmkbjnu5PmnZ/kuYvlkI7nmoRub2Rl5Z2Q5qCH77ybXG4gICAgfSxcblxuICAgIC8vIHRoaXMubm9kZSDmmK/pnIDopoHnp7vliqjnmoToioLngrlcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGp1bXBBY3Rpb24pLnN0YXJ0KClcblxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcblxuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7ICAgXG4gICAgICAgIFxuICAgICAgICBcdFx0Ly/oioLngrnliJ3lp4vkvY3nva4s5q+P5qyh6Kem5pG457uT5p2f5pu05pawXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgLy/op6bmkbjnm5HlkKwodGhpcy5ub2RlLnBhcmVudOaYr+Wxj+W5lSlcbiAgICAgICAgICAgICAgICAvL+aDs+i+vuWIsOaMieS9j+iKgueCue+8jOiKgueCueaJjeiDveenu+WKqOeahOaViOaenO+8jOWwhuebkeWQrOWHveaVsOazqOWGjOWIsCB0aGlzLm5vZGUg5LiK77yM5Y675o6JICAucGFyZW50IOWNs+WPr1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH0sICAgIFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcbiAgICB9LFxufSk7XG5cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e12fLSQu1L+KV6QmxDiavU', 'Game');
// scripts/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; // 初始化计时器

    this.timer = 0;
    this.starDuration = 0; // 生成一个新的星星

    this.spawnNewStar(); // 初始化计分

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星组件上暂存 Game 对象的引用

    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  update: function update(dt) {
    // 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      this.enabled = false; // disable gameOver logic to avoid load scene repeatedly

      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score; // 播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //停止 player 节点的跳跃动作

    cc.director.loadScene('game');
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJncm91bmRZIiwieSIsImhlaWdodCIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwic3Bhd25OZXdTdGFyIiwic2NvcmUiLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld1N0YXJQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImdhbWUiLCJNYXRoIiwicmFuZG9tIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJlbmFibGVkIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBTVI7QUFDQUMsSUFBQUEsZUFBZSxFQUFFLENBUFQ7QUFRUkMsSUFBQUEsZUFBZSxFQUFFLENBUlQ7QUFTUjtBQUNBQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpK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QUM4QyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS2pDLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0gsR0F4Rkk7QUEwRkw0QixFQUFBQSxRQUFRLEVBQUUsb0JBQVk7QUFDbEIsU0FBSy9CLE1BQUwsQ0FBWXFDLGNBQVosR0FEa0IsQ0FDWTs7QUFDOUJoRCxJQUFBQSxFQUFFLENBQUNpRCxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQTdGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyDov5nkuKrlsZ7mgKflvJXnlKjkuobmmJ/mmJ/pooTliLbotYTmupBcbiAgICAgICAgc3RhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICAvLyDmmJ/mmJ/kuqfnlJ/lkI7mtojlpLHml7bpl7TnmoTpmo/mnLrojIPlm7RcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXG4gICAgICAgIC8vIOWcsOmdouiKgueCue+8jOeUqOS6juehruWumuaYn+aYn+eUn+aIkOeahOmrmOW6plxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBsYXllciDoioLngrnvvIznlKjkuo7ojrflj5bkuLvop5LlvLnot7PnmoTpq5jluqbvvIzlkozmjqfliLbkuLvop5LooYzliqjlvIDlhbNcbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyBzY29yZSBsYWJlbCDnmoTlvJXnlKhcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5b6X5YiG6Z+z5pWI6LWE5rqQXG4gICAgICAgIHNjb3JlQXVkaW86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g6I635Y+W5Zyw5bmz6Z2i55qEIHkg6L205Z2Q5qCHXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjtcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XG4gICAgICAgIC8vIOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xuICAgICAgICAvLyDliJ3lp4vljJborqHliIZcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgfSxcblxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOiKgueCuVxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XG4gICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XG4gICAgICAgIC8vIOWcqOaYn+aYn+e7hOS7tuS4iuaaguWtmCBHYW1lIOWvueixoeeahOW8leeUqFxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xuICAgICAgICAvLyDph43nva7orqHml7blmajvvIzmoLnmja7mtojlpLHml7bpl7TojIPlm7Tpmo/mnLrlj5bkuIDkuKrlgLxcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH0sXG5cbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcbiAgICAgICAgLy8g5qC55o2u5Zyw5bmz6Z2i5L2N572u5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pif55qEIHkg5Z2Q5qCHXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcbiAgICAgICAgLy8g5qC55o2u5bGP5bmV5a695bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pifIHgg5Z2Q5qCHXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFg7XG4gICAgICAgIC8vIOi/lOWbnuaYn+aYn+WdkOagh1xuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgLy8g5q+P5bin5pu05paw6K6h5pe25Zmo77yM6LaF6L+H6ZmQ5bqm6L+Y5rKh5pyJ55Sf5oiQ5paw55qE5pif5pifXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxuICAgICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTsgICAvLyBkaXNhYmxlIGdhbWVPdmVyIGxvZ2ljIHRvIGF2b2lkIGxvYWQgc2NlbmUgcmVwZWF0ZWRseVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgfSxcblxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgICAgIC8vIOaSreaUvuW+l+WIhumfs+aViFxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpOyAvL+WBnOatoiBwbGF5ZXIg6IqC54K555qE6Lez6LeD5Yqo5L2cXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------
