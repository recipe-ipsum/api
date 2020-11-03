import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsModule } from './ingredients/ingredients.module';
import { DirectionsModule } from './directions/directions.module';
import { MeasurementsModule } from './measurements/measurements.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [IngredientsModule, DirectionsModule, MeasurementsModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
