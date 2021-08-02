n=0
a=["RAJASTHAN"]
b=["+------+\n|\n|\n|\n|\n|\n|\n|\n|______\n","\n+------+\n|      |\n|      O\n|\n|\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|      |\n|      |\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|      \n|      |\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|\      \n|      |\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|\      \n|      |\n|     /\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|\      \n|      |\n|     / \ \n|\n|\n|______"]       
print("     **HANGMAN**\n\nGuess a state of India.\n")
while n<=6:
     choice=input("Enter a state name: ")
     if choice in list(a):
         print('\nYou Won the Game.')
         break
     elif choice not in list(a):
         print(b[n])
         if n==6:
             print('\nSorry You lost the Game.')
     n+=1
