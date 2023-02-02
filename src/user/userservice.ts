import{Injectable} from '@nestjs/common'
import { getMaxListeners } from 'process';
import { User } from './userentity'

@Injectable()
export class UserService{
    private readonly users: User[] = [

    {
        
    username:"user1",
    password:"pass1",
    email:"user1@getMaxListeners.com",
    age:25
      },
      {
        username:"user2",
        password:"pass2",
        email:"user2@getMaxListeners.com",
        age:25
      }
    ]
    
    async findOne(username: string) {
      return this.users.find(user => user.username === username)
    }

}