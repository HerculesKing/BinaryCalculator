
//Init variables.
var sum = "";
var suk = "";
var x = 1
var check = ""
var check2 = 0

var y = 1
//Called when application is started.
function OnStart()
{

	layMain = app.CreateLayout( "linear", "FillXY" );	


	keys = [ 7,8,9, 4,5,6, 1,2,3, 0,"C" ];
	

	txtSum = app.CreateText( sum, 0.8, 0.1 );
	txtSum.SetTextSize( 42 );
	txtSum.SetBackColor( "#ff222222" );
	txtSum.SetMargins( 0, 0.1, 0, 0.05 );
	layMain.AddChild( txtSum );
	
	txtSuk = app.CreateText( suk, 0.8, 0.1 );
	txtSuk.SetTextSize( 42 );
	txtSuk.SetBackColor( "#ff222222" );
	txtSuk.SetMargins( 0, 0.1, 0, 0.05 );
	layMain.AddChild( txtSuk );
	

	lay1st = app.CreateLayout( "linear", "Horizontal" );	
	for( i=0; i<3; i++ ) AddButton( lay1st, keys[i] );
	layMain.AddChild( lay1st );
	

	lay2nd = app.CreateLayout( "linear", "Horizontal" );	
	for( i=3; i<6; i++ ) AddButton( lay2nd, keys[i] );
	layMain.AddChild( lay2nd );
	

	lay3rd = app.CreateLayout( "linear", "Horizontal" );	
	for( i=6; i<9; i++ ) AddButton( lay3rd, keys[i] );
	layMain.AddChild( lay3rd );
	

	lay4th = app.CreateLayout( "Linear", "Horizontal" );
	for( i=9; i<11; i++ ) AddButton(lay4th,keys[i] );
	
	layMain.AddChild( lay4th );


	

	lay5th = app.CreateLayout( "linear", "Horizontal" );	
	AddButton( lay5th, "=" );
	layMain.AddChild( lay5th );

	
	app.AddLayout( layMain );
}


function AddButton( lay, name )
{
	if( name=="=" ) w = 0.8; else w=0.2;
	btn = app.CreateButton( name, w, 0.1, "Alum" );
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
	
	//Handle clear button.
	else if( txt=="C" ) sum= "",check = "",suk="",check2="",y=1,	txtSuk.SetText(suk);


	//Handle other buttons.
	else sum += txt;
	
	//Update display.
	txtSum.SetText( sum )
	
	//txtSuk.SetText( check);
}

//Calculate sum.
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
