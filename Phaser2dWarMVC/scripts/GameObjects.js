Planet = function (name, point, frame) {

}

ButtonSet = function (name, point, parent) {
    var value = 0;

    var btnLeft = game.add.sprite(point.x, point.y, 'smallbuttons', 0);
    var btnRight = game.add.sprite(point.x + 40, point.y, 'smallbuttons', 1);
    btnRight.scale.set(0.75);
    btnLeft.scale.set(0.75);
    btnLeft.inputEnabled = true;
    btnRight.inputEnabled = true;

    
    
    var style = { font: "20px Arial", fill: "white", align: "left" };
    var txtName = game.add.text(btnRight.width + btnRight.x + 5, point.y, name, style);
    var txtVal = game.add.text(txtName.width + txtName.x + 5, point.y, this.value, style);

    parent.addChild(txtName);
    parent.addChild(txtVal);
    parent.addChild(btnLeft);
    parent.addChild(btnRight);

    this.ChangeValue = function () {
        value += this.increment;
        txtVal.setText(value);
    }

    btnRight.events.onInputDown.add(this.ChangeValue, { increment: 1 });
    btnLeft.events.onInputDown.add(this.ChangeValue, { increment: -1 });
}

