var sum = "";
var suk = "";
var col = "white";

var sup = "";

var suf = "";

var check = "";

var x = "1";

var stl1 =  "green";
var stl2 = "#4285F4";
var stl3 = 500;
var stl4 = "black";
var stl5 = 0;
var stl6 = 0;

function OnStart()
{
app.SetOrientation( "Portrait" );


	// erstes Layout
	lay1 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	lay1.SetBackColor( col );
	lay1.SetPadding( 0, 0.4 );
	lay1.SetOnTouch( Srt_OnTouch );
	// Text "Binary Calculator"
	txt1 = app.CreateText( "Binary Calculator" );
	txt1.SetTextColor( "black" );
	txt1.SetTextSize( 30 );
	txt1.SetOnTouch( Srt_OnTouch );
	// zweites Layout, unter dem ersten
	lay11 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	lay11.SetBackColor( col );
	lay11.SetPadding( 0, 0.2, 0, 0.285 );
	lay11.SetOnTouch( Srt_OnTouch );
	// Text "Click to Continue"
	txt11 = app.CreateText( "Click to Continue" );
	txt11.SetTextSize( 20 );
	txt11.SetTextColor( "black" );
	txt11.SetOnTouch( Srt_OnTouch );
	// erste Seite fertig
	lay11.AddChild( txt11 );
	lay1.AddChild( txt1 );
	lay1.AddChild( lay11 );
	app.AddLayout( lay1 );
	
	// zweite Seite, Layout "Srt"
	laySrt1 = app.CreateLayout( "Linear", "FillXY" );
  laySrt1.SetVisibility( "Hide" );
  laySrt1.SetBackColor( col );
  // Text "Menu"
  txtSrt1 = app.CreateText( "Menu" );
  txtSrt1.SetTextSize( 36 );
  txtSrt1.SetTextColor( "black" );
  laySrt1.AddChild( txtSrt1 );
  // Balken unter dem Text "Menu"
  imgSrt = app.CreateImage( null, 1, 0.01 );
  laySrt1.AddChild( imgSrt );
  
  // Seite 2, Layout 2, "laySrt2"
  laySrt2 = app.CreateLayout( "Linear", "VCenter, FillXY" );
  laySrt2.SetBackColor( col );
  laySrt1.AddChild( laySrt2 );

  //Buttons für Seite 2
  //Button "Settings"
  btnSrt1 = app.CreateButton( "Settings", 0.3, 0.1, "custom" );
  btnSrt1.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnSrt1.SetTextSize( 17 );
  btnSrt1.SetMargins( 0.01, 0.03, 0.01, 0 );
  btnSrt1.SetOnTouch( btnSrt1_OnTouch );
  // Button "Help"
  btnSrt2 = app.CreateButton( "Help", 0.3, 0.1, "custom" );
  btnSrt2.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnSrt2.SetTextSize( 17 );
  btnSrt2.SetMargins( 0.01, 0.03, 0.01, 0 );
  //btnSrt2.SetOnTouch( btnSrt2_OnTouch );
  // Button "Start"
  btnSrt3 = app.CreateButton( "Start", 0.3, 0.1, "custom" );
  btnSrt3.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnSrt3.SetTextSize( 17 );
  btnSrt3.SetOnTouch( btnSrt3_OnTouch );
  // Button um die App zu schließen "Exit"
  btnExt = app.CreateButton( "Exit", 0.3, 0.1, "custom" );
  btnExt.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnExt.SetTextSize( 17 );
  btnExt.SetMargins( 0.01, 0.03, 0.01, 0.01 );
  btnExt.SetOnTouch( btnExt_OnTouch );
  
  laySrt2.AddChild( btnSrt3 );
  laySrt2.AddChild( btnSrt1 );
  laySrt2.AddChild( btnSrt2 );
  laySrt2.AddChild( btnExt );
  
  app.AddLayout( laySrt1 );
  
  // Seite Start Übersicht
  layVrl1 = app.CreateLayout( "Linear", "Vertical, FillX" );
  layVrl1.SetBackColor( col );
  layVrl1.SetVisibility( "Hide" );
  layVrl1.SetSize( 1, 1.3 );
  // Überschrift 
  txtVrl1 = app.CreateText( "Überschrift" );
  txtVrl1.SetTextColor( "black" );
  txtVrl1.SetTextSize( 27 );
	layVrl1.AddChild( txtVrl1 );
  // Balken unter der Überschrift
  imgVrl = app.CreateImage( null, 1, 0.01 );
  layVrl1.AddChild( imgVrl );
  
  // Button für Binärcalculator
  btnVrl1 = app.CreateButton( "Binary -> Dezimal", 0.8, 0.1, "custom" );
  btnVrl1.SetOnTouch( btnVrl1_OnTouch );
  btnVrl1.SetMargins( 0.01, 0.1, 0.01, 0 );
  btnVrl1.SetStyle( "GREEN", "#4285F4", 4 );
  
  btnVrl2 = app.CreateButton( "Dezimal -> Binary", 0.8, 0.1, "custom" );
  btnVrl2.SetOnTouch( btnVrl2_OnTouch );
  btnVrl2.SetMargins( 0.01, 0.1, 0.01, 0 );
  btnVrl2.SetStyle( "GREEN", "#4285F4", 4 );
  
  btnVrl3 = app.CreateButton( "Binary -> Letters", 0.8, 0.1, "custom" );
  btnVrl3.SetOnTouch( btnVrl3_OnTouch );
  btnVrl3.SetMargins( 0.01, 0.1, 0.01, 0 );
  btnVrl3.SetStyle( "GREEN", "#4285F4", 4 );
  
  btnVrl4 = app.CreateButton( "Letters -> Binary", 0.8, 0.1, "custom" );
  //btnVrl4.SetOnTouch( btnVrl4_OnTouch );
  btnVrl4.SetMargins( 0.01, 0.1, 0.01, 0 );
  btnVrl4.SetStyle( "GREEN", "#4285F4", 4 );
  
  btnVrlBck = app.CreateButton( "Back", 0.3, 0.1, "custom" );
  btnVrlBck.SetOnTouch( btnVrlBck_OnTouch );
  btnVrlBck.SetMargins( 0.01, 0.1, 0.26, 0 );
  btnVrlBck.SetStyle( "GREEN", "#4285F4", 4 );
  
  layVrl1.AddChild( btnVrl1 );
  layVrl1.AddChild( btnVrl2 );
  layVrl1.AddChild( btnVrl3 );
  layVrl1.AddChild( btnVrl4 );
  layVrl1.AddChild( btnVrlBck );
  
  app.AddLayout( layVrl1 );
  
  // Seite Calculator Buchstaben
  
  // Seite Calculator Layout 1
  layCalc1 = app.CreateLayout( "Linear",  "Vertical" );
  layCalc1.SetBackColor( col );
  layCalc1.SetVisibility( "Hide" );
  layCalc11 = app.CreateLayout( "Linear", "Horizontal, Left, FillXY" );
  layCalc11.SetBackColor( col );
  layCalc1.AddChild( layCalc11 );
  // Seite Calculator Layout 1 Button "Back"
  btnCalc1 = app.CreateButton( "Back", 0.19, 0.07, "custom" );
  btnCalc1.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnCalc1.SetOnTouch( btnCalc1_OnTouch );
  btnCalc1.SetMargins( 0.01, 0.01, 0.1, 0.01 );
  layCalc11.AddChild( btnCalc1 );
  // Seite Calculator Layout 1 Text "Letters-Calculator"
  txtCalc1 = app.CreateText( "Letters-Calculator" );
  txtCalc1.SetTextColor( "black" );
  txtCalc1.SetMargins( -0.05, 0.02, 0.01, 0.01 );
  txtCalc1.SetTextSize( 27 );
  layCalc11.AddChild( txtCalc1 );
  // Seite Calculator Image 1
  imgCalc1 = app.CreateImage( null, 1, 0.01 );
  layCalc1.AddChild( imgCalc1 );
  // Seite Calculator Layout 2
  layCalc2 = app.CreateLayout( "Linear", "Vertical, FillXY" );
  layCalc2.SetBackColor( col );
  layCalc21 = app.CreateLayout( "Linear", "Horizontal, FillXY" );
  layCalc21.SetBackColor( col );
  layCalc21.SetSize( 1, 0.6 );
  
  // Feld, wo die Binärzahlen reinkommen
  txtCalc21 = app.CreateText( sum, 1, 0.1 );
  txtCalc21.SetTextSize( 42 );
  txtCalc21.SetTextColor( "black" );
  txtCalc21.SetMargins( 0, 0.1, 0, 0.3 );
  
  // Button "C"
  btnCalcC = app.CreateButton( "C", 0.2, 0.1, "custom" );
  btnCalcC.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnCalcC.SetTextSize( 23 );
  btnCalcC.SetOnTouch( btnCalcC_OnTouch );
  
  // Button "0"
  btnCalc21 = app.CreateButton( "0", 0.2, 0.1, "custom" );
  btnCalc21.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnCalc21.SetTextSize( 23 );
  btnCalc21.SetMargins( 0.07, 0, 0.01, 0 );
  btnCalc21.SetOnTouch( btnCalc21_OnTouch );
  
  // Button "1"
  btnCalc22 = app.CreateButton( "1", 0.2, 0.1, "custom" );
  btnCalc22.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnCalc22.SetTextSize( 23 );
  btnCalc22.SetMargins( 0, 0, 0.07, 0 );
  btnCalc22.SetOnTouch( btnCalc22_OnTouch );
  
  // Button "="
  btnCalc23 = app.CreateButton( "=", 0.2, 0.1, "custom" );
  btnCalc23.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnCalc23.SetTextSize( 23 );
  btnCalc23.SetOnTouch( btnCalc23_OnTouch );
  
  layCalc2.AddChild( txtCalc21 );
  layCalc21.AddChild( btnCalcC );
  layCalc21.AddChild( btnCalc21 );
  layCalc21.AddChild( btnCalc22 );
  layCalc21.AddChild( btnCalc23 );
  
  layCalc2.AddChild( layCalc21 );
  
  layCalc1.AddChild( layCalc2 );
  
  // Seite Calculator Zahlen
  // Binär zu Dezimal
  layBin = app.CreateLayout( "Linear", "Vertical, FillX" );
  layBin.SetBackColor( col );
  layBin.SetVisibility( "Hide" );
  layBin.SetSize( 1, 1.3 );
  
  layBin1 = app.CreateLayout( "Linear", "Horizontal, Left, FillX" );
  layBin1.SetBackColor( col );
  layBin1.SetMargins( 0.01, 0, 0, 0 );
  layBin.AddChild( layBin1 );
  
  btnBinBck = app.CreateButton( "Back", 0.19, 0.07, "custom" );
  btnBinBck.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnBinBck.SetOnTouch( btnBinBck_OnTouch );
  btnBinBck.SetMargins( -0.01, -0.005, 0, 0.01 );
  btnBinBck.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  layBin1.AddChild( btnBinBck );
  
  txtBin1 = app.CreateText( "Binary -> Dezimal" );
  txtBin1.SetTextColor( "black" );
  txtBin1.SetTextSize( 27 );
  layBin1.AddChild( txtBin1 );
  
  imgBin = app.CreateImage( null, 1, 0.01 );
  layBin.AddChild( imgBin );
  
  txtBin2 =app.CreateText( sup );
	txtBin2.SetMargins( 0, 0.1, 0.01, 0.01 );
	txtBin2.SetTextSize( 42 );
	txtBin2.SetTextColor( "black" );
	
	txtBin3 =app.CreateText( suf );
	txtBin3.SetMargins( 0, 0.1, 0.01, 0.1 );
	txtBin3.SetTextSize( 42 );
	txtBin3.SetTextColor( "black" );
	
	layBin.AddChild( txtBin2 );
	
	layBin.AddChild( txtBin3 );
	
	layBin2 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	layBin2.SetBackColor( col );
	layBin2.SetMargins( 0, 0.01, 0, 0.03 );
	layBin.AddChild( layBin2 );
	
	btnBin0 = app.CreateButton( "											0", 0.8, 0.15, "Custom" );
  btnBin0.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnBin0.SetTextColor( "black" );
  btnBin0.SetOnTouch( btnBin0_OnTouch );
  layBin2.AddChild( btnBin0 );
  
	btnBin1 = app.CreateButton( "1											", 0.8, 0.15, "Custom" );
  btnBin1.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnBin1.SetTextColor( "black" );
  btnBin1.SetOnTouch( btnBin1_OnTouch );
  layBin2.AddChild( btnBin1);
  
  layBin3 = app.CreateLayout( "Linear", "Horizontal, FillX" );
  layBin3.SetBackColor( col );
  layBin.AddChild( layBin3 );
  
	btnBinClc = app.CreateButton( "											=", 0.8, 0.15, "Custom" );
  btnBinClc.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnBinClc.SetTextColor( "black" );
  btnBinClc.SetOnTouch( btnBinClc_OnTouch );
  layBin3.AddChild( btnBinClc);
  
  btnBinC = app.CreateButton( "C											", 0.8, 0.15, "Custom" );
  btnBinC.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
  btnBinC.SetTextColor( "black" );
  btnBinC.SetOnTouch( btnBinC_OnTouch );
  layBin3.AddChild( btnBinC );
  
  app.AddLayout( layBin );
  // Seite Settings 
  //Dezimal zu binär
  layDez = app.CreateLayout( "linear", "FillXY" );	
  layDez.SetBackColor(col);

	keys = [ 7,8,9, 4,5,6, 1,2,3, 0,"C","<" ];
	

	txtSum = app.CreateText( sum, 0.8, 0.1 );
	txtSum.SetTextSize( 42 );
	txtSum.SetBackColor( "#ff222222" );
	txtSum.SetMargins( 0, 0.1, 0, 0.05 );
	layDez.AddChild( txtSum );
	
	txtSuk = app.CreateText( suk, 0.8, 0.1 );
	txtSuk.SetTextSize( 42 );
	txtSuk.SetBackColor( "#ff222222" );
	txtSuk.SetMargins( 0, 0.1, 0, 0.05 );
	layDez.AddChild( txtSuk );
	

	lay1st = app.CreateLayout( "linear", "Horizontal" );	
	for( i=0; i<3; i++ ) AddButton( lay1st, keys[i] );
	layDez.AddChild( lay1st );
	

	lay2nd = app.CreateLayout( "linear", "Horizontal" );	
	for( i=3; i<6; i++ ) AddButton( lay2nd, keys[i] );
	layDez.AddChild( lay2nd );
	

	lay3rd = app.CreateLayout( "linear", "Horizontal" );	
	for( i=6; i<9; i++ ) AddButton( lay3rd, keys[i] );
	layDez.AddChild( lay3rd );
	

	lay4th = app.CreateLayout( "Linear", "Horizontal" );
	for( i=9; i<12; i++ ) AddButton(lay4th,keys[i] );
	
	layDez.AddChild( lay4th );


	

	lay5th = app.CreateLayout( "linear", "Horizontal" );	
	AddButton( lay5th, "=" );
	layDez.AddChild( lay5th );

	layDez.SetVisibility("Hide");
	app.AddLayout( layDez );

  
  //Layout Settings All
	laySet = app.CreateLayout( "Linear", "FillXY" );
	laySet.SetBackColor( col );
	laySet.SetVisibility( "Hide" );
	txtSet = app.CreateText( "Settings" );
	txtSet.SetTextSize( 30 );
	txtSet.SetTextColor( "black" );
	//buttons layout Settings
	btnCol = app.CreateButton( "Coloroptions", 0.3, 0.06, "custom" );
	btnCol.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnCol.SetOnTouch( btnCol_OnTouch );
	btnSet = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	btnSet.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnSet.SetOnTouch( btnSet_OnTouch );
	laySet.AddChild( txtSet );
	app.AddLayout( laySet );
	//Image Settings
	imgSet = app.CreateImage( null, 1, 0.01 );
	laySet.AddChild( imgSet );
	//Layout Settings 2
	laySet2 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	laySet2.SetBackColor( col );
	laySet.AddChild( laySet2 );
	laySet2.AddChild( btnCol );
	laySet2.AddChild( btnSet );

	//layCol
	layCol= app.CreateLayout( "Linear", "FillXY" );
	layCol.SetBackColor( col );
	layCol.SetVisibility( "Hide" );
	txtCol = app.CreateText( "Coloroptions" );
	txtCol.SetTextSize( 30 );
	txtCol.SetTextColor( "Black" )
	app.AddLayout( layCol );
	imgCol = app.CreateImage( null, 1, 0.01 );
	layCol.AddChild( txtCol );
	layCol.AddChild( imgCol );
	btnColg = app.CreateButton( "Green", 0.3, 0.06, "custom" );
	btnColg.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnColg.SetOnTouch( btnColg_OnTouch );
	btnColw = app.CreateButton( "White", 0.3, 0.06, "custom" );
	btnColw.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnColw.SetOnTouch( btnColw_OnTouch );
	btnColr = app.CreateButton( "Red", 0.3, 0.06, "custom" );
	btnColr.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnColr.SetOnTouch( btnColr_OnTouch );
	btnColb = app.CreateButton( "Blue", 0.3, 0.06, "custom" );
	btnColb.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnColb.SetOnTouch( btnColb_OnTouch );
	btnColBack = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	btnColBack.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6 );
	btnColBack.SetOnTouch( btnColBack_OnTouch );
	layCol2 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	layCol2.SetBackColor( col );
	layCol2.AddChild( btnColg );
	layCol2.AddChild( btnColw );
	layCol2.AddChild( btnColr );
	layCol2.AddChild( btnColb );
	layCol2.AddChild( btnColBack );
	layCol.AddChild( layCol2 );
  
  lay = app.CreateLayout( "Linear", "FillXY" );
  lay.SetBackColor( col );
  
  app.AddLayout( layCalc1 );
  
  DrawPicture();
  
  app.EnableBackKey( false );
  
  app.SetScreenMode( "game" );
}

// alle Images
function DrawPicture()
{
	imgSrt.SetColor( col );
	imgSrt.SetLineWidth( 12 );
	imgSrt.SetPaintColor( "black" );
	imgSrt.DrawLine( 0, 0, 1, 0 );
	
	imgCalc1.SetColor( col );
	imgCalc1.SetLineWidth( 12 );
	imgCalc1.SetPaintColor( "black" );
	imgCalc1.DrawLine( 0, 0, 1, 0 );
	
	imgCol.SetColor( col );
	imgCol.SetLineWidth( 12 );
	imgCol.SetPaintColor( "black" );
	imgCol.DrawLine( 0, 0, 1, 0 );
	
	imgSet.SetColor( col );
	imgSet.SetLineWidth( 12 );
	imgSet.SetPaintColor( "black" );
	imgSet.DrawLine( 0, 0, 1, 0 );
	
	imgVrl.SetColor( col );
	imgVrl.SetLineWidth( 12 );
	imgVrl.SetPaintColor( "black" );
	imgVrl.DrawLine( 0, 0, 1, 0 );
	
	imgBin.SetColor( col );
	imgBin.SetLineWidth( 12 );
	imgBin.SetPaintColor( "black" );
	imgBin.DrawLine( 0, 0, 1, 0 );
}

// erste Seite_OnTouch
function Srt_OnTouch()
{
	//lay1.Animate( "SlideToLeft" );
	laySrt1.SetVisibility( "Show" );
	laySrt1.Animate( "SlideFromRight" );
	lay1.Animate( "SlideToLeft" );
}

// Seite 2_OnTouch
function btnSrt3_OnTouch()
{
	layVrl1.SetVisibility( "Show" );
	layVrl1.Animate( "SlideFromTop" );
	laySrt1.Animate( "SlideToBottom" );
	laySrt1.SetVisibility( "Show" );
}

function btnVrl1_OnTouch()
{
	layBin.SetVisibility( "Show" );
	layVrl1.SetVisibility( "Hide" );
}
function btnVrl2_OnTouch()
{layDez.SetVisibility("Show")}
function btnVrl3_OnTouch()
{
	layCalc1.SetVisibility( "Show" );
	layVrl1.SetVisibility( "Hide" );
}

function btnVrlBck_OnTouch()
{
	layVrl1.Animate( "SlideToTop" );
	layVrl1.SetVisibility( "Hide" );
	laySrt1.SetVisibility( "Show" );
	laySrt1.Animate( "SlideFromBottom" );
}

// Seite Calculator Binary -> Letters_OnTouch
function btnCalc1_OnTouch()
{
	layCalc1.SetVisibility( "Hide" );
	layVrl1.SetVisibility( "Show" );
}

function btnCalc21_OnTouch()
{
	sum += 0;
	
	txtCalc21.SetText( sum );
}

function btnCalc22_OnTouch()
{
	sum += 1;
	
	txtCalc21.SetText( sum );
}

function btnCalcC_OnTouch()
{
	sum = "";
	
	txtCalc21.SetText( sum );
}


function btnCalc23_OnTouch()
{
	var txtBin = txtCalc21.GetText();
	
	if (txtBin=="01000001") sum = "A";
	
	else if (txtBin=="01100001") sum = "a";
	
	else if (txtBin=="01000010") sum = "B";
	
	else if (txtBin=="01100010") sum = "b";
	
	else if (txtBin=="01000011") sum = "C";
	
	else if (txtBin=="01100011") sum = "c";
	
	else if (txtBin=="01000100") sum = "D";
	
	else if (txtBin=="01100100") sum = "d";
	
	else if (txtBin=="01000101") sum = "E";
	
	else if (txtBin=="01100101") sum = "e";
	
	else if (txtBin=="01000110") sum = "F";
	
	else if (txtBin=="01100110") sum = "f";
	
	else if (txtBin=="01000111") sum = "G";
	
	else if (txtBin=="01100111") sum = "g";
	
	else if (txtBin=="01001000") sum = "H";
	
	else if (txtBin=="01101000") sum = "h";
	
	else if (txtBin=="01001001") sum = "I";
	
	else if (txtBin=="01101001") sum = "i";
	
	else if (txtBin=="01001010") sum = "J";
	
	else if (txtBin=="01101010") sum = "j";
	
	else if (txtBin=="01001011") sum = "K";
	
	else if (txtBin=="01101011") sum = "k";
	
	else if (txtBin=="01001100") sum = "L";
	
	else if (txtBin=="01101100") sum = "l";
	
	else if (txtBin=="01001101") sum = "M";
	
	else if (txtBin=="01101101") sum = "m";
	
	else if (txtBin=="01001110") sum = "N";
	
	else if (txtBin=="01101110") sum = "n";
	
	else if (txtBin=="01001111") sum = "O";
	
	else if (txtBin=="01001111") sum = "o";
	
	else if (txtBin=="01010000") sum = "P";
	
	else if (txtBin=="01110000") sum = "p";
	
	else if (txtBin=="01010001") sum = "Q";
	
	else if (txtBin=="01110001") sum = "q";
	
	else if (txtBin=="01010010") sum = "R";
	
	else if (txtBin=="01110010") sum = "r";
	
	else if (txtBin=="01010011") sum = "S";
	
	else if (txtBin=="01110011") sum = "s";
	
	else if (txtBin=="01010100") sum = "T";
	
	else if (txtBin=="01110100") sum = "t";
	
	else if (txtBin=="01010101") sum = "U";
	
	else if (txtBin=="01110101") sum = "u";
	
	else if (txtBin=="01010110") sum = "V";
	
	else if (txtBin=="01110110") sum = "v";
	
	else if (txtBin=="01010111") sum = "W";
	
	else if (txtBin=="01110111") sum = "w";
	
	else if (txtBin=="01011000") sum = "X";
	
	else if (txtBin=="01111000") sum = "x";
	
	else if (txtBin=="01011001") sum = "Y";
	
	else if (txtBin=="01111001") sum = "y";
	
	else if (txtBin=="01011010") sum = "Z";
	
	else if (txtBin=="01111010") sum = "z";
	
	else sum = "ERROR";
	
	txtCalc21.SetText( sum );
}

// Seite Binary -> Dezimal_OnTouch
function btnBinBck_OnTouch()
{
	layBin.SetVisibility( "Hide" );
	layVrl1.SetVisibility( "Show" );
}

function btnBin0_OnTouch()
{
	sup += "0";
	txtBin2.SetText( sup );
}

function btnBin1_OnTouch()
{
	sup += "1";
	txtBin2.SetText( sup );
}

function btnBinClc_OnTouch()
{ check = ""
   x= 1
	check+=1;
	check-=1;
	
	while (x<sup.length+1) 
	{
	check += ((sup % (Math.pow(10,x)))-(sup % (Math.pow(10,x-1))))/ (Math.pow(10,x-1))* Math.pow(2,x-1)
	
	x++;
	
	txtBin3.SetText( check );
	}
}

function btnBinC_OnTouch()
{
	sup="";
	txtBin2.SetText( sup );
	
	suf="";
	txtBin3.SetText( suf );
	
	check = "";
	
	x=1;
}


// Seite Coloroptions_OnTouch
function btnCol_OnTouch()
{
	laySet.SetVisibility( "Hide" );
	layCol.SetVisibility( "Show" );
}

function btnSet_OnTouch()
{
	laySet.SetVisibility( "Hide" );
	laySrt1.SetVisibility( "Show" );
}

function btnColBack_OnTouch()
{
	layCol.SetVisibility( "Hide" );
	laySet.SetVisibility( "Show" );
}

function btnSrt1_OnTouch()
{
	laySrt1.SetVisibility( "Hide" );
	laySet.SetVisibility( "Show" );
}

function btnExt_OnTouch()
{
	var YN = app.CreateYesNoDialog( "Exit App?" );
	YN.SetOnTouch( YN_OnTouch );
	YN.Show();
}

function YN_OnTouch( result )
{
	if ( result=="Yes" ) app.Exit();
	else app.SetScreenMode( "game" );
}
function AddButton( lay, name )
{
	if( name=="=" ) w = 0.8; else w=0.2;
	btn = app.CreateButton( name, w, 0.1, "custom" );
	btn.SetStyle( stl1, stl2, stl3, stl4, stl5, stl6);
	btn.SetOnTouch( btns_OnTouch );
	lay.AddChild( btn );
}
function btns_OnTouch()
{
	app.Vibrate( "0,100" );
	
	//Get button text.
	btn = app.GetLastButton();
	var txt = btn.GetText();
	
	//Handle equals button.
	if( txt=="=" ) CalcResult();
	
	else if( txt=="<") layDez.SetVisibility("Hide")
	
	//Handle clear button.
	else if( txt=="C" ) sum= "",check = "",suk="",check2="",y=1,	txtSuk.SetText(suk);


	//Handle other buttons.
	else sum += txt;
	
	//Update display.
	txtSum.SetText( sum )
	
	//txtSuk.SetText( check);
}
function CalcResult()
{check = "",suk="",check2="",y=1,	txtSuk.SetText(suk);
	
	check2 = sum
	while(check2>=1) 
	{ 
	check += check2 % 2
	x = check2 % 2
	  check2 =(check2 -1* x )/2
	  
	  


   }
   
   
   
	while (y< check.length+1){
	
      suk += ((check % Math.pow(10,y))-(check % Math.pow(10,y-1)))/ (Math.pow(10,y-1))
   txtSuk.SetText( suk)
   y++
    }
    txtSuk.SetText( suk);
}

function btnColg_OnTouch()
{
	var col = "green";
		
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
	layVrl1.SetBackColor( col );
	layBin.SetBackColor( col );
	layBin1.SetBackColor( col );
	layBin2.SetBackColor( col );
	layBin3.SetBackColor( col );
}

function btnColw_OnTouch()
{
	var col = "white";
		
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
	layVrl1.SetBackColor( col );
	layBin.SetBackColor( col );
	layBin1.SetBackColor( col );
	layBin2.SetBackColor( col );
	layBin3.SetBackColor( col );
}

function btnColr_OnTouch()
{
	var col = "red";
	
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
	layVrl1.SetBackColor( col );
	layBin.SetBackColor( col );
	layBin1.SetBackColor( col );
	layBin2.SetBackColor( col );
	layBin3.SetBackColor( col );
}

function btnColb_OnTouch()
{
	var col = "blue";	
	
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
	layVrl1.SetBackColor( col );
	layBin.SetBackColor( col );
	layBin1.SetBackColor( col );
	layBin2.SetBackColor( col );
	layBin3.SetBackColor( col );
}