import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod,XHRBackend, RequestOptions } from '@angular/http';
import {MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options:BaseRequestOptions, realBackend:XHRBackend){

    //Array in local storage
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    //Configure fakeBackend
    backend.connections.subscribe((connection: MockConnection) =>{
        //wrap to simulate 

        setTimeout(
            () =>{
                if(connection.request.url.endsWith('/api/authenticate') && connection.request.method ===  RequestMethod.Post  ){
                    let  params = JSON.parse(connection.request.getBody());    

                    let filteredUsers = users.filter(user =>{
                        return user.username === params.username && user.password === params.password;
                    } );

                    if(filteredUsers.length){
                        //if login details are valid return 200
                        let user = filteredUsers[0];
                        connection.mockRespond( new Response(new ResponseOptions({
                            status: 200,
                            body:{
                                id: user.id,
                                username: user.username,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                token: 'fake-jwt-token' 
                            }})));
                    }else{
                        connection.mockError(new  Error ('User or password is incorrect'));
                    }
                       return; 
                }
            }
        )

    } )

}