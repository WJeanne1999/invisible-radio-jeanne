void setup() {
  Serial.begin(9600);
}

void loop() {
	//create a variable called val that stores the incoming analog vaues
  int val = analogRead(A0); //the pin number is the argument that goes inside the analogRead function
  Serial.println(val); //we are sending our values across to P5JS via Serial communication

  // 10 readings per second
  delay(100);
}
