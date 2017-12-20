import { NgModule } from '@angular/core';
import { StatusFilterPipe } from './status-filter/status-filter';
@NgModule({
	declarations: [StatusFilterPipe],
	imports: [],
	exports: [StatusFilterPipe]
})
export class PipesModule {
	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: []
		}
	}
}
