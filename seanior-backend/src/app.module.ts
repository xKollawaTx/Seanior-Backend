// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResourceController } from './resource/resource.controller';
import { ResourceService } from './resource/resource.service';
import { ResourceModule } from './resource/resource.module';
import { ConfigModule } from '@nestjs/config';
import { SwimmingCourseModule } from './swimming-course/swimming-course.module';
import { SwimmingCourseController } from './swimming-course/swimming-course.controller';
import { InstructorRequestService } from './instructor-request/instructor-request.service';
import { InstructorRequestController } from './instructor-request/instructor-request.controller';
import { InstructorRequestModule } from './instructor-request/instructor-request.module';
import { PaymentModule } from './payment/payment.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';
import { NotificationModule } from './notification/notification.module';
import { CourseRequestModule } from './course-request/course-request.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    PrismaModule,
    ResourceModule,
    SwimmingCourseModule,
    InstructorRequestModule,
    PaymentModule,
    NotificationModule,
    CourseRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // imports: [UsersModule, AuthModule, PrismaModule, ResourceModule],
  // controllers: [AppController, UsersController, ResourceController],
  // providers: [AppService, UsersService, PrismaService, ResourceService],
})
export class AppModule {}
