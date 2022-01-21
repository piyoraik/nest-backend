import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { CreateCarBodyImageDTO } from './dto/create.carbodyimage.dto';

@Controller('car-body-image')
export class CarBodyImageController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('img'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: CreateCarBodyImageDTO,
  })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
