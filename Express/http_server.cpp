#include <iostream>
#include <sstream>
#include <string>
#include <fstream>
#include <winsock2.h>
#include <ws2tcpip.h>

#pragma comment(lib, "Ws2_32.lib")

#define PORT 8080
#define BUFFER_SIZE 1024

std::string get_file_content(const std::string& file_name) {
    std::ifstream file(file_name.c_str(), std::ios::in | std::ios::binary);
    if (file) {
        std::ostringstream contents;
        contents << file.rdbuf();
        file.close();
        return contents.str();
    }
    return "File not found";
}

void handle_request(SOCKET client_socket) {
    char buffer[BUFFER_SIZE] = {0};
    recv(client_socket, buffer, BUFFER_SIZE, 0);
    
    std::string request(buffer);
    std::istringstream iss(request);
    std::string method, path, protocol;
    iss >> method >> path >> protocol;

    if (method == "GET") {
        if (path == "/") path = "/index.html";
        std::string content = get_file_content("." + path);
        
        std::ostringstream response;
        response << "HTTP/1.1 200 OK\r\n"
                 << "Content-Type: text/html\r\n"
                 << "Content-Length: " << content.length() << "\r\n"
                 << "\r\n"
                 << content;

        send(client_socket, response.str().c_str(), response.str().length(), 0);
    }

    closesocket(client_socket);
}

int main() {
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "WSAStartup failed.\n";
        return 1;
    }

    SOCKET server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd == INVALID_SOCKET) {
        std::cerr << "Can't create a socket! Quitting" << std::endl;
        WSACleanup();
        return 1;
    }

    sockaddr_in hint;
    hint.sin_family = AF_INET;
    hint.sin_port = htons(PORT);
    hint.sin_addr.S_un.S_addr = INADDR_ANY;

    bind(server_fd, (sockaddr*)&hint, sizeof(hint));

    listen(server_fd, SOMAXCONN);

    std::cout << "Server listening on port " << PORT << std::endl;

    while(true) {
        sockaddr_in client;
        int clientSize = sizeof(client);
        SOCKET clientSocket = accept(server_fd, (sockaddr*)&client, &clientSize);

        handle_request(clientSocket);
    }

    closesocket(server_fd);
    WSACleanup();

    return 0;
}