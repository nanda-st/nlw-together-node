import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '../repositories/ComplimentRepository';
import { TagRepository } from '../repositories/TagRepository';
import { UserRepository } from '../repositories/UserRepository';

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({ user_sender, user_receiver, tag_id, message }: IComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);
    const tagRepository = getCustomRepository(TagRepository);

    if (user_sender === user_receiver) {
      throw new Error('You cannot compliment yourself!');
    }
        
    const userReceiverExists = await userRepository.findOne(user_receiver);
        
    const tagExists = await tagRepository.findOne(tag_id);

    if (!userReceiverExists) {
      throw new Error('Receiver does not exists!');
    }
    
    if (!tagExists) {
      throw new Error('Tag does not exists!');
    }

    const compliment = complimentRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    await complimentRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
