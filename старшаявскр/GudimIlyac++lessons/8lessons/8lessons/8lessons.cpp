

#include <iostream>
using namespace std;
//void sqare() {
    //for (int i = 0; i < 5; i++) {
    //    cout << "* ";
    //}
    //cout << "\n";
    //for (int i = 0; i < 5; i++) {
    //    cout << "*       * \n";
    //}
    //for (int i = 0; i < 5; i++) {
    //    cout << "* ";
    //}




//}
int main()
{
    int count = 2;
    for (int i = 0; i < count + 1; i++)
    {
        cout << " ";
    }
    cout << "*\n";
    for (int i = 0; i < count; i++)
    {
        for (int l = count; l != i; l--)
        {
            cout << " ";
        }
        for (int j = 0; j <= i; j++) {
            cout << "**";
        }
        cout << "*\n";
    }


    //for (int i = 0; i < 9; i++) {
    //    if (i %2) {
    //        cout << "yes";
    //    }
    //    else {
    //        cout << "no";
    //    }
        
 
    /*sqare();*/

   
    //for (int i = 0; i < 5; i++) {
    //    for (int y = 0; y < 5; y++) {
    //        cout << "satriy bog\n";
    //    }
    //    cout << "hola\n"

    //}
    //
}


