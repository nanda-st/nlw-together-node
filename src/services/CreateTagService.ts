import { getCustomRepository } from 'typeorm';
import { TagRepository } from '../repositories/TagRepository';

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagRepositoy = getCustomRepository(TagRepository);
        
    if (!name) {
      throw new Error('Incorrect name!');
    }

    const tagAlreadyExists = await tagRepositoy.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const tag = tagRepositoy.create({ name });

    await tagRepositoy.save(tag);

    return tag;
  }
}

export { CreateTagService };
