"use strict";
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