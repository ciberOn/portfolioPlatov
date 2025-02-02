// 9lesson.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
using namespace std;
string str = "Stara Box";

int main()
{

    char findChr;
    int count = 0;
    cin >> findChr;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == findChr) {
            count++;
        }
    }
        if (count == 0) {
            cout << "Use some \'a\' chars";
            cout << "\n";
        }
        else {
            cout << "Pay tax";
            cout << "\n";
        }
        cout << count;
}
